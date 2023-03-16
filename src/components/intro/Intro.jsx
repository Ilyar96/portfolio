import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Htag, ScrollButton, Container } from "../UI/";
import styles from "./Intro.module.scss";
import bgImage from "./coding.jpg";

export const Intro = () => {
	return (
		<section className={styles.root}>
			<Container>
				<LazyLoadImage
					className={styles.background}
					src={bgImage}
					alt="Ноутбук на рабочем столе"
				/>

				<Htag className={styles.h1} tag={"h1"}>
					Lorem, ipsum.
				</Htag>
				<Htag className={styles.h1} tag={"h2"}>
					Фрилансер, Веб разработчик
				</Htag>
				<ScrollButton
					as={"a"}
					href="#layout"
					rel="nofollow"
					className={styles.scroll}
				/>
			</Container>
		</section>
	);
};
