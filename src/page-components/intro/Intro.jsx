import React, { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CSSTransition } from "react-transition-group";
import cn from "classnames";
import { Htag, ScrollButton, Container } from "../../components/UI";
import styles from "./Intro.module.scss";
import bgImage from "./coding.jpg";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { setIntersectionObserverOptions } from "../../helpers";

export const Intro = () => {
	const buttonRef = useRef(null);
	const titleRef = useRef(null);
	const descriptionRef = useRef(null);
	const entryTitle = useIntersectionObserver(
		titleRef,
		setIntersectionObserverOptions()
	);
	const isTitleVisible = entryTitle?.isIntersecting;

	return (
		<section className={styles.root}>
			<Container>
				<LazyLoadImage
					className={styles.background}
					src={bgImage}
					alt="Ноутбук на рабочем столе"
				/>

				<CSSTransition
					nodeRef={titleRef}
					timeout={100}
					classNames={"fade-in"}
					in={isTitleVisible}
				>
					<Htag className={cn(styles.h1, "fade-in")} tag={"h1"} ref={titleRef}>
						Lorem, ipsum.
					</Htag>
				</CSSTransition>

				<CSSTransition
					nodeRef={descriptionRef}
					timeout={400}
					classNames={"fade-in-up"}
					in={isTitleVisible}
				>
					<Htag
						className={cn(styles.h2, "fade-in-up")}
						tag={"h2"}
						ref={descriptionRef}
					>
						Фрилансер, Веб разработчик
					</Htag>
				</CSSTransition>

				<CSSTransition
					nodeRef={buttonRef}
					timeout={800}
					classNames={"fade-in"}
					in={isTitleVisible}
				>
					<ScrollButton
						as={"a"}
						href="#about"
						rel="nofollow"
						className={cn(styles.scroll, "fade-in")}
						ref={buttonRef}
					/>
				</CSSTransition>
			</Container>
		</section>
	);
};
