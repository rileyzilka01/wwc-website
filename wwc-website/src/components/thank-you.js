import Link from 'next/link.js'

import styles from '../styles/thank-you.module.css'

export default function ThankYou() {

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>
                Thanks for your interest in our services!
            </h2>
            <h2 className={styles.title}>
                A service representative will be in contact within the next 24 hours!
            </h2>
            <Link href="/" className={styles.link}>
                <h2 className={styles.title}>
                    Home
                </h2>
            </Link>
        </div>
    )
}