import React, { useRef } from "react";
import cn from "classnames";
import { Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CSSTransition } from "react-transition-group";
import { Section, Container, Htag, Button } from "../../components/UI";
import {
	getReviewImageList,
	setIntersectionObserverOptions,
} from "../../helpers";
import { useIntersectionObserver } from "../../hooks";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/effect-fade";
import styles from "./Reviews.module.scss";

const reviewList = getReviewImageList();

export const Reviews = ({ title = "Отзывы" }) => {
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);
	const titleRef = useRef(null);
	const sliderRef = useRef(null);
	const entrySlider = useIntersectionObserver(
		sliderRef,
		setIntersectionObserverOptions()
	);
	const isSliderVisible = entrySlider?.isIntersecting;

	return (
		<Section>
			<Container>
				<CSSTransition
					nodeRef={titleRef}
					timeout={100}
					classNames={"fade-in-up"}
					in={isSliderVisible}
				>
					<Htag
						ref={titleRef}
						tag="h2"
						className={cn(styles.h2, "fade-in-up")}
						center
						firstLetterColored
					>
						{title}
					</Htag>
				</CSSTransition>

				<div className={styles.body}>
					<CSSTransition
						nodeRef={sliderRef}
						timeout={400}
						classNames={"fade-in"}
						in={isSliderVisible}
					>
						<Swiper
							modules={[Navigation, EffectFade]}
							className={cn(styles.sliderWrapper, "fade-in")}
							loop={true}
							spaceBetween={50}
							effect="fade"
							slidesPerView={1}
							autoHeight={true}
							ref={sliderRef}
							onSwiper={(swiper) => {
								setTimeout(() => {
									if (swiper.params) {
										swiper.params.navigation.prevEl = navigationPrevRef.current;
										swiper.params.navigation.nextEl = navigationNextRef.current;

										swiper.navigation.destroy();
										swiper.navigation.init();
										swiper.navigation.update();
									}
								});
							}}
						>
							{reviewList.map(({ src, mobSrc }, i) => (
								<SwiperSlide className={styles.slide} key={i}>
									<picture>
										<source media="(max-width: 768px)" srcSet={mobSrc} />
										<LazyLoadImage
											className={styles.img}
											src={src}
											alt="Отзыв заказчика"
										/>
									</picture>
								</SwiperSlide>
							))}
						</Swiper>
					</CSSTransition>

					<CSSTransition
						nodeRef={navigationPrevRef}
						timeout={800}
						classNames={"fade-in-left"}
						in={isSliderVisible}
					>
						<Button
							appearance="icon"
							className={cn(styles.navigation, styles.prev, "fade-in-left")}
							ref={navigationPrevRef}
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
								<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
							</svg>
							<span className="visually-hidden">Предыдущий слайд</span>
						</Button>
					</CSSTransition>

					<CSSTransition
						nodeRef={navigationNextRef}
						timeout={800}
						classNames={"fade-in-right"}
						in={isSliderVisible}
					>
						<Button
							appearance="icon"
							className={cn(styles.navigation, styles.next, "fade-in-right")}
							ref={navigationNextRef}
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
								<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
							</svg>

							<span className="visually-hidden">Следующий слайд</span>
						</Button>
					</CSSTransition>
				</div>
			</Container>
		</Section>
	);
};
