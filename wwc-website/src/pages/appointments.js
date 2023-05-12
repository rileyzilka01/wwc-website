import Sidebar from '@/components/sidebar.js'
import Navbar from '../components/navbar.js'
import Calendars from '@/components/calendars.js'
import Form from '../components/form.js'
import Footer from '../components/footer.js'

import Head from 'next/head'

import React, {useState} from 'react'

export default function Home() {

    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Head>
                <title>Appointments | WWC</title>
                <meta name="description" content="appointments, scheduling, schedule, calendar, availability, book, time, window washing, collective" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/media/logo.png" />
            </Head>
            <Sidebar isOpen={isOpen}/>
            <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <Calendars />
            <Form />
            <Footer />
        </>
    )
}