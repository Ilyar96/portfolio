import React from "react";
import styles from "./Footer.module.scss";
import { SocialList } from "../";
import { Container, Htag } from "../UI";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container className={styles.container}>
				<div className={styles.left}>
					<Htag className={styles.title} tag={"h3"}>
						Сотрудничество:
					</Htag>
					<a href="mailto:kasyymov.ilyar@gmail.com" className={styles.mail}>
						kasyymov.ilyar@gmail.com
					</a>
				</div>

				<div className={styles.right}>
					<Htag className={styles.title} tag={"h3"}>
						Мои социальные сети:
					</Htag>

					<SocialList center className={styles.social} />
				</div>
			</Container>
		</footer>
	);
};
