import styles from '@/styles/jobs.module.css'

import React, {useState} from 'react'

import {FiChevronRight as ChevRight, FiChevronDown as ChevDown} from 'react-icons/fi'

export default function Jobs() {
    
    const [isOpenOne, setIsOpenOne] = useState(true);
    const [isOpenTwo, setIsOpenTwo] = useState(true);

    const toggleOne = () => {
        setIsOpenOne(!isOpenOne);
    }
    const toggleTwo = () => {
        setIsOpenTwo(!isOpenTwo);
    }
    
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.mainTitle}>
                We are always looking for new talent!
            </h1>
            <h2 className={styles.mainSubtitle}>
                Please send your resume and any applicable information to windowwashingcollective@gmail.com
            </h2>
            <div className={styles.jobWrapper}>
                <div className={styles.jobHeader}>
                    <div className={styles.itemContainer}>
                        <p className={styles.headerItem}>
                            Sales Person
                        </p>
                        <p className={styles.headerItem}>
                            Full Time / Part Time
                        </p>
                        <p className={styles.headerItem}>
                            Calgary
                        </p>
                    </div>
                    <ChevRight className={styles.chev} style={{'--disp': isOpenOne ? 'none' : 'flex'}} onClick={toggleOne}/>
                    <ChevDown className={styles.chev} style={{'--disp': isOpenOne ? 'flex' : 'none'}} onClick={toggleOne}/>
                </div>
                <div className={styles.expandedWrapper} style={{'--disp': isOpenOne ? 'none' : 'flex'}}>
                    <div className={styles.description}>
                        As a Salesman, you will be responsible for selling our services to potential customers. With the most common route being door to door. You will work closely with our marketing team to identify potential leads, follow up with prospects, and close deals.
                    </div>
                    <div className={styles.bulletWrapper}>
                        <div className={styles.bulletTitle}>
                            Responsibilities
                        </div>
                        <div className={styles.bullet}>
                            Identify potential leads through market research and outreach.
                        </div>
                        <div className={styles.bullet}>
                            Build relationships with prospects and clients to understand their needs and goals.
                        </div>
                        <div className={styles.bullet}>
                            Explain the features and benefits of our products and services.
                        </div>
                        <div className={styles.bullet}>
                            Negotiate prices and contracts with potential clients.
                        </div>  
                        <div className={styles.bullet}>
                            Keep track of sales data and provide regular reports to management.
                        </div>
                        <div className={styles.bullet}>
                            Collaborate with the marketing team to develop new sales strategies and improve existing ones.
                        </div>
                    </div>
                    <div className={styles.bulletWrapper}>
                        <div className={styles.bulletTitle}>
                            Requirements
                        </div>
                        <div className={styles.bullet}>
                            The ability to put 100% effort into a task.
                        </div>
                        <div className={styles.bullet}>
                            Excellent communication and interpersonal skills.
                        </div>
                        <div className={styles.bullet}>
                            Ability to build and maintain relationships with clients.
                        </div>
                        <div className={styles.bullet}>
                            Strong negotiation and persuasion skills.
                        </div>
                        <div className={styles.bullet}>
                            Ability to work independently and as part of a team.
                        </div>
                        <div className={styles.bullet}>
                            Strong organizational and time management skills.
                        </div>
                    </div>
                    <div className={styles.description}>
                        We offer the highest sale commission out of any company in the city. When you provide us with value, we do the same. We also offer opportunities for growth and advancement within the company. (employee profit share)
                    </div>
                    <div className={styles.description}>
                        If you are a motivated and driven type of person with a passion for closing deals and building relationships, we encourage you to apply for this exciting opportunity.
                    </div>
                </div>
            </div>
            <div className={styles.jobWrapper}>
                <div className={styles.jobHeader}>
                    <div className={styles.itemContainer}>
                        <p className={styles.headerItem}>
                            Window Washer
                        </p>
                        <p className={styles.headerItem}>
                            Full Time / Part Time
                        </p>
                        <p className={styles.headerItem}>
                            Calgary
                        </p>
                    </div>
                    <ChevRight className={styles.chev} style={{'--disp': isOpenTwo ? 'none' : 'flex'}} onClick={toggleTwo}/>
                    <ChevDown className={styles.chev} style={{'--disp': isOpenTwo ? 'flex' : 'none'}} onClick={toggleTwo}/>
                </div>
                <div className={styles.expandedWrapper} style={{'--disp': isOpenTwo ? 'none' : 'flex'}}>
                    <div className={styles.description}>
                        We are seeking hardworking and reliable Window Washers to join our team. As a Window Washer, you will be responsible for cleaning and maintaining the exterior of residential buildings. You will work closely with our clients to provide excellent customer service and ensure that their properties are clean and presentable. So when the job is complete everyone is happy.
                    </div>
                    <div className={styles.bulletWrapper}>
                        <div className={styles.bulletTitle}>
                            Responsibilities
                        </div>
                        <div className={styles.bullet}>
                            Clean windows and surfaces using specialised cleaning equipment and techniques.
                        </div>
                        <div className={styles.bullet}>
                            Remove dirt, grime, and other debris from windows and surfaces.
                        </div>
                        <div className={styles.bullet}>
                            Identify and report any damages or safety hazards to management.
                        </div>
                        <div className={styles.bullet}>
                            Follow safety protocols to ensure a safe work environment.
                        </div>
                        <div className={styles.bullet}>
                            Provide exceptional customer service to clients and respond to their requests and concerns.
                        </div>
                        <div className={styles.bullet}>
                            Keep track of machine welfare, and report any issues to management
                        </div>
                    </div>
                    <div className={styles.bulletWrapper}>
                        <div className={styles.bulletTitle}>
                            Requirements:
                        </div>
                        <div className={styles.bullet}>
                            Prior experience as a Window Washer or in a similar role is preferred but not required. (Anything hard labour)
                        </div>
                        <div className={styles.bullet}>
                            Ability to work in varying weather conditions.
                        </div>
                        <div className={styles.bullet}>
                            Strong attention to detail and ability to perform repetitive tasks.
                        </div>
                        <div className={styles.bullet}>
                            Excellent communication and customer service skills.
                        </div>
                        <div className={styles.bullet}>
                            Ability to work independently and as part of a team.
                        </div>
                        <div className={styles.bullet}>
                            Ability to follow safety guidelines and protocols.
                        </div>
                        <div className={styles.bullet}>
                            Valid driver&apos;s licence and reliable transportation is preferred but not required.
                        </div>
                    </div>
                    <div className={styles.description}>
                        We offer a competitive commission, tips from happy customers and opportunities for career growth and advancement. We also provide on-the-job training and safety equipment to ensure your success. (Employee Profit Share)
                    </div>
                    <div className={styles.description}>
                        If you are a hardworking and reliable individual with a passion for providing exceptional customer service, we encourage you to apply for this exciting opportunity to join the collective as a Window Washer.
                    </div>
                </div>
            </div>
        </div>
    )
}

function expanded() {
    return (
        <div className={styles.expandedWrapper}>
            HELLO
        </div>
    ) 
}