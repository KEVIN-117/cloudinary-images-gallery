import { createClient } from "@supabase/supabase-js"
import { envValidator } from "../env"

export const createPublicClient = () => createClient(
    envValidator.server.SUPABASE_URL,
    envValidator.server.SUPABASE_ANON_KEY
)