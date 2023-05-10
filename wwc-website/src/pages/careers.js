import Navbar from '../components/navbar.js'
import Jobs from '../components/jobs.js'
import Footer from '../components/footer.js'

import Head from 'next/head'

export default function Careers() {
    return (
        <>
            <Head>
                <title>Careers | WWC</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/media/logo.png" />
            </Head>
            <Navbar />
            <Jobs />
            <Footer />
        </>
    )
}