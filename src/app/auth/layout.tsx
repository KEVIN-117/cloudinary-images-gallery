import { ReactNode } from 'react'
import {AuthenticationLayout} from "@/components/auth/Main";
export default function layout({ children }: { children: ReactNode }){
    return (
        <section>
            <AuthenticationLayout>
                {children}
            </AuthenticationLayout>
        </section>
    );
}