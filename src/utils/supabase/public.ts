import { createClient } from "@supabase/supabase-js";
import { envValidator } from "@/utils/env";

export const createPublicClient = () =>
    createClient(envValidator.server.SUPABASE_URL, envValidator.server.SUPABASE_ANON_KEY);
