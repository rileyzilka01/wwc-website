import Image from 'next/image'

import styles from '@/styles/hero.module.css'

export default function Hero() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.heroBG}>
                <Image className={styles.image}
                    src="/media/hero1.png"
                    width={2000}
                    height={900}
                    alt="hero"
                />
            </div>
            <div className={styles.content}>
                <h1 className={styles.heroh1}>
                    Window Washing Collective
                </h1>
                <p className={styles.herop}>
                    You Don't Pay Until We Get The Okay
                </p>
            </div>
        </div>
    )
}