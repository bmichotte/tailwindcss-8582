import { useSession } from 'next-auth/react'
import { useI18n } from 'next-localization'
import { useRouter } from 'next/router'
import { FC, ReactNode, useCallback, useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'

interface Props {
    children?: ReactNode
}

const I18nBase: FC<Props> = ({ children }) => {
    const router = useRouter()
    const i18n = useI18n()

    const changeLocale = useCallback(
        async (locale: string) => {
            i18n.set(locale, await import(`../locales/${locale}.json`))
            i18n.locale(locale)
        },
        [i18n]
    )

    useEffect(() => {
        changeLocale(router.locale ?? 'fr')
    }, [router.locale])

    return (
        <>
            {children}

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}

export default I18nBase
