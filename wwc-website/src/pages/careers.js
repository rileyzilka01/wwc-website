import Sidebar from '@/components/sidebar.js'
import Navbar from '../components/navbar.js'
import Jobs from '../components/jobs.js'
import Footer from '../components/footer.js'

import Head from 'next/head'

import React, {useState} from 'react'

export default function Careers() {

    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Head>
                <title>Careers | WWC</title>
                <meta name="keywords" content="Window Washing, Services, Calgary, Washing, Windows, Cheap, Competetive, Customer Service, Collective, Gutter, Screen Cleaning, Shine, Careers"/>
                <meta name="description" content="High quality, premium window washing, gutter shining and screen cleaning services in Calgary Alberta. Prioritized customer service and employee gratification" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/media/logo.png" />
            </Head>
            <Sidebar isOpen={isOpen}/>
            <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <Jobs />
            <Footer />
        </>
    )
}