import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'

import Head from 'next/head'

export default function Agreement() {
    return (
        <>
            <Head>
                <title>Agreement | WWC</title>
                <meta name="description" content="appointments, scheduling, schedule, calendar, availability, book, time, window washing, collective" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/media/pictures/logo.png" />
            </Head>
            <Navbar />
            <Footer />
        </>
    )
}