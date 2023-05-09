import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/footer.module.css'

export default function Footer() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <Image
                    className={styles.image}
                    src="/media/logo-dark.png"
                    alt="logo"
                    height={500}
                    width={500}
                />
                <h1 className={styles.title}>
                    Window Washing Collective
                </h1>
            </div>
            <div className={styles.middle}>
                <div className={styles.contacts}>
                    <h2 className={styles.subtitle}>
                        Contacts
                    </h2>
                    <h2 className={styles.item}>
                        Sales: 403-618-3783
                    </h2>
                    <h2 className={styles.item}>
                        Customer Service: 403-404-1478
                    </h2>
                    <h2 className={styles.item}>
                        Windowwashingcollective@gmail.com
                    </h2>
                </div>
                <Link className={styles.button} href='/careers'>
                    Careers
                </Link>
            </div>
            <div className={styles.right}>
                <Link className={styles.button}
                    href="/appointments">
                    Book an Appointment
                </Link>
            </div>
        </div>
    )
}