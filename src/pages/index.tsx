import Layout from 'components/ui/front/layout'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useI18n } from 'next-localization'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
    const { t } = useI18n()
    const router = useRouter()
    const { data: session, status } = useSession()

    return (
        <Layout pageTitle="index" className="h-full" innerClass="h-screen flex flex-col">
            {t('hello')}
        </Layout>
    )
}

export default Home
