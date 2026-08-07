import { Session, SupabaseClient } from "@supabase/auth-helpers-nextjs";

export interface responseTypes {
    info: ImageType
    event: "success" | "error" | "progress";
}

export interface ImageType {
    id: any;
    path: string;
    public_id: string;
    secure_url: string;
    height: number;
    width: number;
    original_filename: string;
    blurImage?: string;
}

export interface SupabaseContextType {
    supabase: SupabaseClient,
    authSession: Session | null
}
