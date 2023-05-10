import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
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
                </Link>
                <Link href="/#services" className={styles.link}>
                    Services
                </Link>
                <Link href="/#testimonials" className={styles.link}>
                    Testimonials
                </Link>
            </div>
            <div className={styles.right}>
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
        </div>
    )
}