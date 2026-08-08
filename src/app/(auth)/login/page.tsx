import { Auth } from "@/components/organisms/auth/Auth";


// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;


interface PageProps {
    searchParams: Promise<{ message?: string }>
}

export default async function LoginPage({ searchParams }: PageProps) {
    const { message } = await searchParams;
    return <Auth isLogin={true} message={message} />
}
