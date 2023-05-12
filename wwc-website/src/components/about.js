import styles from '@/styles/about.module.css'

export default function About() {
    return (
        <div className={styles.wrapper} id="about">
            <h1>
                Who We Are
            </h1>
            <div className={styles.contentWrapper}>
                <div className={styles.contentTop}>
                    <h2 className={styles.topTitle}>
                        WWC was started by young entrepreneurs and prides itself on providing a truly high-quality fair priced service to Calgary and the surrounding areas
                    </h2>
                </div>
                <div className={styles.contentBottom}>
                    <div className={styles.bottomItem}>
                        <div className={styles.titleWrapper}>
                            <h2 className={styles.title}>
                                Competetive Pricing
                            </h2>
                        </div>
                        <p className={styles.desc}>
                            We take satisfaction in providing an industry wide competetive, accurate rate for the work that we do. We love to negotiate, but we have our limits. We strive to provide all customers with the best price possible while maintaining the value of our work. We believe in the age-old saying, &apos;You get what you pay for&apos;. 
                        </p>
                    </div>
                    <div className={styles.bottomItem}>
                        <div className={styles.titleWrapper}>
                            <h2 className={styles.title}>
                                High quality service
                            </h2>
                        </div>
                        <p className={styles.desc}>
                            The Window Washing industry is infected with bad actors trying to hustle their employees and customers to maximize profits. This industry blunder has bred a standard of cut corners and poor quality work that leaves customers dissatisfied and skeptical. We plan to reverse this trend with the application of intense leadership, paired with diligence for quality.
                        </p>
                    </div>
                    <div className={styles.bottomItem}>
                        <div className={styles.titleWrapper}>
                            <h2 className={styles.title}>
                                Employee Gratification
                            </h2>
                        </div>
                        <p className={styles.desc}>
                            Employees are the backbone of every organization. That is why the Collective provides intensive mentorship to all employees to reach set personal goals before the end of the season. The Collective is also an equal opportunity corporation meaning we provide opportunities for position creation and employee investment. After all, we are the Collective!
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.button}>
                Book an Appointment
            </div>
        </div>
    )
}