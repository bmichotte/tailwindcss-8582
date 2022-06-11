import Head from 'next/head'
import React, { FC, ReactNode } from 'react'
import I18nBase from '../../i18n-base'
import cx from 'classnames'

interface Props {
    pageTitle: string
    description?: string
    className?: string
    innerClass?: string
    children?: ReactNode
    nav?: boolean
}

const Layout: FC<Props> = ({
    pageTitle = '',
    description = '',
    className = '',
    innerClass = '',
    children,
    nav = true,
}) => {
    return (
        <I18nBase>
            <div
                className={cx(
                    'layout flex flex-col font-roboto text-skin-primary-c',
                    className ?? 'bg-skin-secondary'
                )}>
                <Head>
                    <title>{pageTitle}</title>
                    <meta name="description" content={description} />
                </Head>

                <div className={cx('z-10 flex flex-col', { 'layout-inner': nav }, innerClass)}>{children}</div>
            </div>
        </I18nBase>
    )
}

export default Layout
