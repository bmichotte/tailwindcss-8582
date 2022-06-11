import { Role } from '.prisma/client'

declare module 'next-auth' {
    interface Session {
        user?: {
            id?: number | null
            name?: string | null
            username?: string | null
            firstname?: string | null
            lastname?: string | null
            email?: string | null
            image?: string | null
            roles?: Role[]
            role?: string | null
            active?: true
            function?: string | null
            locale?: string | null
            picture?: string | null
        }
        expires?: string
        accessToken: string
    }
}
