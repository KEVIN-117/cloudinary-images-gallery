import { ReactNode } from 'react'
import {AuthenticationLayout} from "@/components/auth/Main";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default function layout({ children }: { children: ReactNode }){
    return (
        <section>
            <AuthenticationLayout>
                {children}
            </AuthenticationLayout>
        </section>
    );
}