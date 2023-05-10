import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/sidebar.module.css'

import {FiChevronRight as ChevRight} from 'react-icons/fi'


export default function Sidebar({ isOpen }) {
    return (
        <div className={styles.wrapper} 
            style={{'--pos': isOpen ? '-60vw' : '0', '--shadow': isOpen ? '0px 8px 16px 0px rgba(0,0,0,0.5)' : '0px 0px 0px 0px rgba(0,0,0,0)'}}
        >
            <Link href="/">
                <Image 
                    src="/media/logo-dark.png"
                    alt="logo"
                    className={styles.logo}
                    width={100}
                    height={100}
                    priority
                />
            </Link>
            <Link href="/#about" className={styles.link}>
                About
                <ChevRight className={styles.chev}/>
            </Link>
            <Link href="/#services" className={styles.link}>
                Services
                <ChevRight className={styles.chev}/>
            </Link>
            <Link href="/#testimonials" className={styles.link}>
                Testimonials
                <ChevRight className={styles.chev}/>
            </Link>
            <Link href="/careers">
                <div className={styles.button}>
                    Careers
                </div>
            </Link>
            <Link href="/appointments">
                <div className={styles.button}>
                    Book an Appointment
                </div>
            </Link>
        </div>
    )
}