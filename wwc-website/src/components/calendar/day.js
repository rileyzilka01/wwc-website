
import styles from '../../styles/calendars.module.css'

export default function Day ({ day }) {
    return (
        <div className={styles.day}> 
            <div className={styles.num}> {day} </div> 
            <div className={styles.bar}/> 
        </div>
    )
}