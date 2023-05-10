import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'

import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>Appointments | WWC</title>
                <meta name="description" content="appointments, scheduling, schedule, calendar, availability, book, time, window washing, collective" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/media/logo.png" />
            </Head>
            <Navbar />
            <Footer />
        </>
    )
}