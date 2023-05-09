import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'
import styles from '@/styles/navbar.module.css'

const inter = Inter({ subsets: ['latin'] })

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
        // <main className={`${styles.main} ${inter.className}`}>
        //     <div className={styles.description}>
        //         <p>
        //         Get started by editing&nbsp;
        //         <code className={styles.code}>src/pages/index.js</code>
        //         </p>
        //         <div>
        //         <a
        //             href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //             By{' '}
        //             <Image
        //             src="/vercel.svg"
        //             alt="Vercel Logo"
        //             className={styles.vercelLogo}
        //             width={100}
        //             height={24}
        //             priority
        //             />
        //         </a>
        //         </div>
        //     </div>

        //     <div className={styles.center}>
        //         <Image
        //         className={styles.logo}
        //         src="/next.svg"
        //         alt="Next.js Logo"
        //         width={180}
        //         height={37}
        //         priority
        //         />
        //     </div>

        //     <div className={styles.grid}>
        //         <a
        //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        //         className={styles.card}
        //         target="_blank"
        //         rel="noopener noreferrer"
        //         >
        //         <h2>
        //             Docs <span>-&gt;</span>
        //         </h2>
        //         <p>
        //             Find in-depth information about Next.js features and&nbsp;API.
        //         </p>
        //         </a>

        //         <a
        //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        //         className={styles.card}
        //         target="_blank"
        //         rel="noopener noreferrer"
        //         >
        //         <h2>
        //             Learn <span>-&gt;</span>
        //         </h2>
        //         <p>
        //             Learn about Next.js in an interactive course with&nbsp;quizzes!
        //         </p>
        //         </a>

        //         <a
        //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        //         className={styles.card}
        //         target="_blank"
        //         rel="noopener noreferrer"
        //         >
        //         <h2>
        //             Templates <span>-&gt;</span>
        //         </h2>
        //         <p>
        //             Discover and deploy boilerplate example Next.js&nbsp;projects.
        //         </p>
        //         </a>

        //         <a
        //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        //         className={styles.card}
        //         target="_blank"
        //         rel="noopener noreferrer"
        //         >
        //         <h2>
        //             Deploy <span>-&gt;</span>
        //         </h2>
        //         <p>
        //             Instantly deploy your Next.js site to a shareable URL
        //             with&nbsp;Vercel.
        //         </p>
        //         </a>
        //     </div>
        // </main>
    )
}