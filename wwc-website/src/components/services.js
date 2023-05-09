import Link from 'next/link'
import Image from 'next/image'

import styles from '@/styles/services.module.css'

export default function Services() {
    return (
        <div className={styles.wrapper} id="services">
            <h1>
                Services
            </h1>
            <div className={styles.top}>
                <h2 className={styles.title}>
                    Premium Window Cleaning
                </h2>
                <h3 className={styles.subtitle}>
                    A high-quality window washing job involves several key elements to ensure that the windows are thoroughly cleaned and appear crystal clear:
                </h3>
                <div className={styles.bottom}>
                    <div className={styles.topLeft}>
                        <Image className={styles.image}
                            src="/media/IMG-1491.jpg"
                            width={1000}
                            height={1000}
                        />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.bullet}>
                            <p className={styles.bulletNumber}>
                                1 | Thorough Cleaning
                            </p>
                            <p className={styles.description}>
                                A high-quality window washing job involves a thorough cleaning of the exterior windows. This includes removing all dirt, grime, and debris from the glass, frames, seals, and rain guards.
                            </p>
                        </div>
                        <div className={styles.bullet}>
                            <p className={styles.bulletNumber}>
                                2 | Use of Appropriate Cleaning Solutions
                            </p>
                            <p className={styles.description}>
                                A professional window washer will use the appropriate cleaning solutions to ensure that the windows are cleaned effectively without causing any damage. They will also take into account any special considerations such as the type of glass or coatings on the windows.
                            </p>
                        </div>
                        <div className={styles.bullet}>
                            <p className={styles.bulletNumber}>
                                3 | Attention to Detail
                            </p>
                            <p className={styles.description}>
                                A high-quality window washing job involves paying attention to every detail, including the corners, edges, and hard-to-reach areas of the windows. The professional will also ensure that all streaks and smudges are removed for a crystal-clear finish.
                            </p>
                        </div>
                        <div className={styles.bullet}>
                            <p className={styles.bulletNumber}>
                                4 | Use of Professional Tools and Equipment
                            </p>
                            <p className={styles.description}>
                                A professional window washer will use high-quality tools and equipment to ensure that the job is completed efficiently and effectively. This includes the use of telescopic fiberglass poles, nylon fiber brushes, 3 stage water deionizers, and other specialized tools to access and clean windows at various heights and angles.
                            </p>
                        </div>
                        <div className={styles.bullet}>
                            <p className={styles.bulletNumber}>
                                5 | Safety
                            </p>
                            <p className={styles.description}>
                            A high-quality window washing job requires a focus on safety. A professional window washer will take all necessary precautions to ensure their safety and the safety of those around them.
                            </p>
                        </div>
                    </div>
                </div>
                <h3 className={styles.subtitle}>
                    Overall, a high-quality window washing job will leave your windows looking clean, clear, and sparkling. The result will be healthier seals that improve your windows longevity and insulation capabilities, and a brighter and more inviting space that will impress both your family and your guests.
                </h3>
                <h3 className={styles.price}>
                    $80 - $349
                </h3>
            </div>
            <h2 className={styles.title}>
                Other Services
            </h2>
            <div className={styles.bottom}> 
                <div className={styles.bottom}>
                    <div className={styles.left}>
                        <h2 className={styles.title}>
                            Screen Cleaning
                        </h2>
                        <p className={styles.description}>
                            Window screens are an important part of any home or building. They help keep bugs and debris out while still allowing fresh air to flow through. However, over time, screens can accumulate dirt, dust, and grime, which can affect their effectiveness and appearance. That's why it's important to have your window screens cleaned regularly 
                        </p>
                        <p className={styles.description}>
                            When the screens are removed, the client will typically take them outside to a designated cleaning area. Depending on the extent of the dirt and grime buildup, the screens may be brushed, scrubbed, or flooded to remove all debris and buildup.
                        </p>
                        <p className={styles.description}>
                            After the screens have been thoroughly cleaned, they will be left to dry in the sun or in a designated drying area. Once the screens are dry, they will be ready for installation.
                        </p>
                        <h3 className={styles.subtitle}>
                            Overall, a window screen cleaning service will provide a thorough and effective cleaning, ensuring your screens are in top condition and ready to provide optimal performance.
                        </h3>
                        <h3 className={styles.price}>
                            $2 per screen
                        </h3>
                    </div>
                    <div className={styles.right}>
                        <h2 className={styles.title}>
                            Gutter Shine and Cleaning
                        </h2>
                        <p className={styles.description}>
                            Gutter shine jobs are a great way to keep the outside of your gutters looking clean and fresh. While gutter cleaning typically involves removing debris from inside the gutters, a gutter shine job focuses on the outside of the gutters. One effective method of performing a gutter shine job is by using a water-fed brush to scrub the outside of the gutters.
                        </p>
                        <p className={styles.description}>
                            A water-fed brush is a specialized cleaning tool that is designed to be used with a high-pressure water system. It features a long handle and a soft-bristled brush head that is attached to a water supply. This allows the cleaning technician to easily reach all areas of the gutter and scrub away any dirt or grime that has accumulated on the surface.
                        </p>
                        <p className={styles.description}>
                            The technician will start by wetting down the gutter surface with a high-pressure water system. Then, they will apply a specially formulated cleaning solution to the surface of the gutters. The water-fed brush is then used to scrub the surface of the gutters, removing any dirt or grime that has built up.
                        </p>
                        <p className={styles.description}>
                            After the gutters have been scrubbed clean, the technician will rinse away any remaining dirt or cleaning solution with a high-pressure water system. This will leave the gutters looking clean and shiny, and help to extend their lifespan by preventing the buildup of dirt and grime.
                        </p>
                        <h3 className={styles.subtitle}>
                            Overall, a gutter shine job using a water-fed brush is an effective and efficient way to keep your gutters looking their best
                        </h3>
                        <h3 className={styles.price}>
                            $40 - $200
                        </h3>
                    </div>
                </div>
            </div>
            <h2 className={styles.title}>
                We also love to give deals and promotions to our valued customers, so be sure to inquire about any current specials or promotions we may be running. Our team is dedicated to providing high-quality services at affordable prices, and we're committed to delivering the best possible value to our customers.
            </h2>
            <Link href="\appointments" className={styles.button}>
                Book an Appointment Today
            </Link>
        </div>
    )
}