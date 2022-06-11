import { SessionProvider } from 'next-auth/react'
import { I18nProvider } from 'next-localization'
import { AppProps } from 'next/app'
import Router from 'next/router'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { useEffect } from 'react'
import { FC, useState } from 'react'
import 'styles/globals.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App: FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter()

    const { lngDict, session, ...rest } = pageProps

    return (
        <SessionProvider session={session}>
            <I18nProvider lngDict={lngDict} locale={router.locale}>
                <Component {...rest} />
            </I18nProvider>
        </SessionProvider>
    )
}

export default App
