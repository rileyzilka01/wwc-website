import Navbar from '../components/navbar.js'
import Hero from '../components/hero.js'
import About from '../components/about.js'
import Services from '../components/services.js'
import Testimonials from '../components/testimonials.js'
import Footer from '../components/footer.js'

import Head from 'next/head'

//medium blue: #7397B6
//light gray: #ACC4CC
//off white: #F0F0F0
//dark blue: #0C458D
//darkest blue: #042349
//orange: #f59c37

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | WWC</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/media/pictures/logo.png" />
            </Head>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Testimonials />
            <Footer />
        </>
    )
}