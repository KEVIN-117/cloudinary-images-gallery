import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/atoms/toaster";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Images Gallery",
    description: "Images Gallery",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="es"
            className={`dark ${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
        >
            <body className="flex min-h-full flex-col font-sans">
                <Toaster />
                {children}
            </body>
        </html>
    );
}
