import { z } from "zod";

export const clientEnvSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url({ message: "NEXT_PUBLIC_SUPABASE_URL must be a valid URL" }),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1, { message: "NEXT_PUBLIC_SUPABASE_ANON_KEY is required" }),
});

export const serverEnvSchema = z.object({
  SUPABASE_URL: z.string().url({ message: "SUPABASE_URL must be a valid URL" }),
  SUPABASE_ANON_KEY: z.string().min(1, { message: "SUPABASE_ANON_KEY is required" }),
});

export type ClientEnv = z.infer<typeof clientEnvSchema>;
export type ServerEnv = z.infer<typeof serverEnvSchema>;

// Combined schema for environments where both are available (like Server)
export const combinedEnvSchema = clientEnvSchema.merge(serverEnvSchema);
export type CombinedEnv = z.infer<typeof combinedEnvSchema>;
