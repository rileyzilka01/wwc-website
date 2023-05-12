
import styles from '@/styles/form.module.css'

export default function Form() {
    return (
        <div>
            <div className={styles.wrapper}>
                <form className={styles.form} 
                    action="https://formsubmit.co/windowwashingcollective@gmail.com"
                    method="POST" 
                    spellCheck="false" 
                    id="contact"
                >
                    <h2 className={styles.title}>
                        Please enter your information to book a service
                    </h2>
                    <h3 className={styles.subtitle}>
                        Once our team has received your request, we will be in contact to setup a time within the next 24 hours!
                    </h3>
                    <h3 className={styles.subtitle}>
                        We are always looking for new customers so if you not are listed in one of the communities listed above, we may be able to do a group deal with your neighbours!
                    </h3>
                    <div className={styles.inputContainer}>
                        <input type="hidden" name="_next" value="https://wwc-website.vercel.app/thanks"/>
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
                                phone="Phone"
                                required
                            />
                        </div>
                        <input className={styles.input} 
                            type="address" 
                            placeholder="Address" 
                            required="true" 
                            id="address" 
                            name="Address"
                        />
                        <input className={styles.input} 
                            type="name" 
                            placeholder="If applicable, how did you hear about us?" 
                            id="hear"
                            name="Hear"
                        />
                    </div>
                    <button className={styles.button} type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}