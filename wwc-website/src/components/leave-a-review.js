
import styles from '@/styles/form.module.css'

export default function Form() {
    return (
        <div>
            <div className={styles.wrapperFill}>
                <form className={styles.form} 
                    action="https://formsubmit.co/2b16baf8a244b30edd31b36adb28eee7"
                    method="POST" 
                    spellCheck="false" 
                    id="contact"
                >
                    <h2 className={styles.title}>
                        Leave a review to let us know how we did
                    </h2>
                    <h3 className={styles.subtitleReview}>
                        We appreciate all feedback, knowing what we did well allows us to maintain a high level of customer satisfaction and knowing what went wrong allows us to improve our services for the future.
                    </h3>
                    <div className={styles.inputContainer}>
                        <input type="hidden" name="_next" value="https://windowwashingcollective.com/thanks"/>
                        <div className={styles.inputRow}>
                            <input className={styles.input} 
                                form_id="contact" 
                                type="text" 
                                placeholder="First Name" 
                                id="name" 
                                name="Name"
                                required
                            />
                            <input className={styles.input} 
                                form_id="contact" 
                                type="text" 
                                placeholder="Last Name" 
                                id="name" 
                                name="Name"
                                required
                            />
                        </div>
                        <div className={styles.inputRow}>
                            <input className={styles.input} 
                                type="email" 
                                placeholder="Email" 
                                required="true" 
                                id="email" 
                                name="Email"
                            />
                            <input className={styles.input} 
                                type="tel" 
                                placeholder="Phone Number" 
                                id="phone" 
                                name="Phone"
                                required
                            />
                        </div>
                        <textarea className={styles.textArea}
                            type="name" 
                            placeholder="Leave your review" 
                            required="true" 
                            name="Review"/>
                    </div>
                    <button className={styles.button} type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}