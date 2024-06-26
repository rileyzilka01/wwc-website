
import styles from '../../styles/calendars.module.css'

import Day from '../calendar/day.js'

export default function July({ count }) {
    return (
        <div className={styles.calendarWrapper} style={{'--wrapDisp': (count == 2) ? 'flex' : 'none'}}>
            <div className={styles.monthHeader}>
                <div className={styles.day}> Sun </div>
                <div className={styles.day}> Mon </div>
                <div className={styles.day}> Tue </div>
                <div className={styles.day}> Wed </div>
                <div className={styles.day}> Thu </div>
                <div className={styles.day}> Fri </div>
                <div className={styles.day}> Sat </div>
            </div>
            <div className={styles.month}>
                <div className={styles.week} style={{'--col': 'green'}}>
                    <div className={styles.dayOut}> 30 </div>
                    <Day day={1}/>
                    <Day day={2}/>
                    <Day day={3}/>
                    <Day day={4}/>
                    <Day day={5}/>
                    <Day day={6}/>
                </div>
                <div className={styles.week} style={{'--col': 'silver'}}>
                    <Day day={7}/>
                    <Day day={8}/>
                    <Day day={9}/>
                    <Day day={10}/>
                    <Day day={11}/>
                    <Day day={12}/>
                    <Day day={13}/>
                </div>
                <div className={styles.week} style={{'--col': 'silver'}}>
                    <Day day={14}/>
                    <Day day={15}/>
                    <Day day={16}/> 
                    <Day day={17}/>
                    <Day day={18}/>
                    <Day day={19}/>
                    <Day day={20}/>
                </div>
                <div className={styles.week} style={{'--col': 'silver'}}>
                    <Day day={21}/>
                    <Day day={22}/>
                    <Day day={23}/> 
                    <Day day={24}/>
                    <Day day={25}/>
                    <Day day={26}/>
                    <Day day={27}/>
                </div>
                <div className={styles.week} style={{'--col': 'gold'}}>
                    <Day day={28}/>
                    <Day day={29}/>
                    <Day day={30}/>
                    <Day day={31}/>
                    <div className={styles.dayOut}> 1 </div>
                    <div className={styles.dayOut}> 2 </div>
                    <div className={styles.dayOut}> 3 </div>
                </div>
            </div>
        </div>
    )
}