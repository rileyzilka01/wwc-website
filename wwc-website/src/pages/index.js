import Sidebar from '../components/sidebar.js'
import Navbar from '../components/navbar.js'
import Hero from '../components/hero.js'
import About from '../components/about.js'
import Services from '../components/services.js'
import Testimonials from '../components/testimonials.js'
import Footer from '../components/footer.js'

import Head from 'next/head'

import React, {useState} from 'react'

//medium blue: #7397B6
//light gray: #ACC4CC
//off white: #F0F0F0
//dark blue: #0C458D
//darkest blue: #042349
//orange: #f59c37
//light blue: #e0f9ff

export default function Home() {

    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Head>
                <title>Home | WWC</title>
                <meta name="keywords" content="Window Washing, Services, Calgary, Washing, Windows, Cheap, Competetive, Customer Service, Collective, Gutter, Screen Cleaning, Shine"/>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/media/logo.png" />
            </Head>
            <Sidebar isOpen={isOpen}/>
            <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <Hero />
            <About />
            <Services />
            <Testimonials />
            <Footer />
        </>
    )
}