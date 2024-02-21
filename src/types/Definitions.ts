export interface responseTypes {
    info:ImageType
    event: "success" | "error" | "progress";
}

export interface ImageType {
    path: string;
    public_id: string;
    secure_url: string;
    height: number;
    width: number;
    original_filename: string;
    blurImage?: string;
}