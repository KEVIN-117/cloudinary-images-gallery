-- 1. Crear la tabla profiles
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  role TEXT NOT NULL CHECK (role IN ('admin', 'viewer')) DEFAULT 'viewer',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Habilitar RLS en profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- 3. Políticas para profiles
-- Los usuarios pueden leer su propio perfil
CREATE POLICY "Users can view own profile" 
ON public.profiles FOR SELECT 
USING (auth.uid() = id);

-- Solo admins o el superusuario pueden actualizar roles (o se maneja por triggers/backend)
-- Por ahora, dejemos que un admin pueda ver todos los perfiles
CREATE POLICY "Admins can view all profiles" 
ON public.profiles FOR SELECT 
USING (
  (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'
);


-- 4. Trigger para crear perfil automáticamente al registrarse en Supabase
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, role)
  VALUES (new.id, 'viewer');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();


-- 5. Actualizar políticas RLS para la tabla 'images'
-- Asegurarse de que RLS está habilitado
ALTER TABLE public.images ENABLE ROW LEVEL SECURITY;

-- Eliminar políticas anteriores si existen
DROP POLICY IF EXISTS "Enable read access for all users" ON public.images;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON public.images;

-- 5a. Los usuarios autenticados (viewer y admin) pueden VER las imágenes
CREATE POLICY "Authenticated users can view images" 
ON public.images FOR SELECT 
TO authenticated 
USING (true);

-- 5b. SOLO los usuarios con rol 'admin' pueden INSERTAR imágenes
CREATE POLICY "Only admins can insert images" 
ON public.images FOR INSERT 
TO authenticated 
WITH CHECK (
  (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'
);

-- 5c. SOLO los usuarios con rol 'admin' pueden ELIMINAR imágenes
CREATE POLICY "Only admins can delete images" 
ON public.images FOR DELETE 
TO authenticated 
USING (
  (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'
);

-- OPCIONAL: Insertar manualmente un admin para pruebas (reemplaza 'TU_UUID_AQUI' por tu ID real en auth.users)
-- UPDATE public.profiles SET role = 'admin' WHERE id = 'TU_UUID_AQUI';
