import ThankYou from '@/components/thank-you.js'

import Head from 'next/head'

export default function Thanks() {
    return (
        <>
            <Head>
                <title>Thanks | WWC</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/media/logo.png" />
            </Head>
            <ThankYou />
        </>
    )
}