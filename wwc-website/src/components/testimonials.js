import Review from './review.js'

import styles from '../styles/testimonials.module.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay} from "swiper"
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import { reviews } from '../data/testimonials.js';



export default function Testimonials() {

    return (
        <div className={styles.wrapper} id="testimonials">
            <h1>
                What Our Customers Have To Say
            </h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                autoHeight={true}
                loop={true}
                breakpoints={{
                1000: {
                    slidesPerView: 3
                }
                }}
                navigation={false}
                autoplay={true}
                modules={[Autoplay, Pagination, Navigation]}
                grabCursor={true}
                className={styles.swiper}
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.name} data-swiper-autoplay="4000">
                        <Review name={review.name} location={review.location} review={review.review}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}