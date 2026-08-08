import { createBrowserClient } from "@supabase/ssr";
import { envValidator } from "@/utils/env";

export const createClient = () => createBrowserClient(
    envValidator.client.NEXT_PUBLIC_SUPABASE_URL,
    envValidator.client.NEXT_PUBLIC_SUPABASE_ANON_KEY
)
