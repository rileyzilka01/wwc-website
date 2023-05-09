import styles from '../styles/review.module.css'

export default function Review({name, location, review}) {
  return (
    <>
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <div className={styles.review}>
                    {review}
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.name}>
                    {name}
                </div>
                <div className={styles.location}>
                    {location}
                </div>
            </div>
        </div>
    </>
  );
}
