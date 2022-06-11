/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import { AppProviders } from 'next-auth/providers'

const secret = process.env.NEXTAUTH_SECRET

const providers: AppProviders = []

export const options = {
    providers,
    callbackUrl: process.env.NEXTAUTH_URL,
}

const middleware = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => await NextAuth(req, res, options)
export default middleware
