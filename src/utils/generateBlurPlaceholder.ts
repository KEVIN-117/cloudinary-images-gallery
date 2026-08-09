import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import type { ImageType } from "@/types/Definitions";

export default async function getBase64ImageUrl(image: ImageType) {
    const { secure_url } = image;

    const response = await fetch(
        "https://res.cloudinary.com/dhq9acwqr/image/upload/v1708376986/movile-bg/descarga_5_lt6s1o.jpg",
    );
    const buffer = await response.arrayBuffer();
    const minified = await imagemin.buffer(Buffer.from(buffer), {
        plugins: [imageminJpegtran()],
    });

    const url = `data:image/jpeg;base64,${Buffer.from(minified).toString("base64")}`;
    return url;
}
