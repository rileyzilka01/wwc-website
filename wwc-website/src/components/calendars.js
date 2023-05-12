
import May from './months/may.js'
import June from './months/june.js'
import July from './months/july.js'
import August from './months/august.js'
import September from './months/september.js'

import { FiChevronLeft as ChevLeft, FiChevronRight as ChevRight } from 'react-icons/fi'

import React, { useState } from 'react'

import styles from '@/styles/calendars.module.css'

export default function Calendars() {

    const [count, setCount] = useState(0);

    const decrementCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const incrementCount = () => {
        if (count < 4) {
            setCount(count + 1);
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.calContainer}>
                <div className={styles.monthSwitchWrapper}>
                    <ChevLeft className={styles.chev} onClick={decrementCount} style={{'--chevDisp': (count == 0) ? 'hidden' : 'visible'}}/>
                    <div className={styles.monthName}>
                        {getName(count)}
                    </div>
                    <ChevRight className={styles.chev} onClick={incrementCount} style={{'--chevDisp': (count == 4) ? 'hidden' : 'visible'}}/>
                </div>
                <May count={count}/>
                <June count={count}/>
                <July count={count}/>
                <August count={count}/>
                <September count={count}/>
            </div>
            <div className={styles.legendContainer}>
                <h2 className={styles.disclaimer}>
                    Please find dates that work best for you and fill in the form below
                </h2>
                <h2 className={styles.disclaimer}>
                    * If you book a time while we are in your area you may be eligible for up to 50% off on services
                </h2>
                <h2 className={styles.disclaimer}>
                    * If you are not in one of our target communities, your quote will be $200 or more.
                </h2>
                <h2 className={styles.disclaimer}>
                    * Services booked during the &apos;comeback&apos; period will not be eligible for discount nor will you be charged extra
                </h2>
                <div className={styles.legendItem}>
                    <div className={styles.legendText}>
                        Mahogany
                    </div>
                    <div className={styles.bar} style={{'--col': 'brown'}}/>
                </div>
                <div className={styles.legendItem}>
                    <div className={styles.legendText}>
                        Chestermere
                    </div>
                    <div className={styles.bar} style={{'--col': 'lightblue'}}/>
                </div>
                <div className={styles.legendItem}>
                    <div className={styles.legendText}>
                        Evergreen
                    </div>
                    <div className={styles.bar} style={{'--col': 'green'}}/>
                </div>
                <div className={styles.legendItem}>
                    <div className={styles.legendText}>
                        Silverado
                    </div>
                    <div className={styles.bar} style={{'--col': 'silver'}}/>
                </div>
                <div className={styles.legendItem}>
                    <div className={styles.legendText}>
                        Belmont
                    </div>
                    <div className={styles.bar} style={{'--col': 'gold'}}/>
                </div>
                <div className={styles.legendItem}>
                    <div className={styles.legendText}>
                        Yorktowne
                    </div>
                    <div className={styles.bar} style={{'--col': 'orange'}}/>
                </div>
                <div className={styles.legendItem}>
                    <div className={styles.legendText}>
                        Comeback
                    </div>
                    <div className={styles.bar} style={{'--col': 'blue'}}/>
                </div>
            </div>
        </div>
    )
}

function getName(count) {
    if (count == 0) {return 'May'}
    else if (count == 1) {return 'June'}
    else if (count == 2) {return 'July'}
    else if (count == 3) {return 'August'}
    else if (count == 4) {return 'September'}
    return ''
}