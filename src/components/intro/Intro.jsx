import React from "react";
import { Htag, ScrollButton } from "../UI/";
import styles from "./Intro.module.scss";
import bgImage from "./coding.jpg";

export const Intro = () => {
	return (
		<section className={styles.root}>
			<img
				className={styles.background}
				src={bgImage}
				alt="Ноутбук на рабочем столе"
			/>
			<Htag className={styles.h1} tag={"h1"}>
				Lorem, ipsum.
			</Htag>
			<Htag tag={"h2"}>Фрилансер, Веб разработчик</Htag>
			<ScrollButton className={styles.scroll} />
		</section>
	);
};
