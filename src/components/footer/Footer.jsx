import React, { useRef } from "react";
import styles from "./Footer.module.scss";
import { SocialList } from "../";
import { Container, Htag } from "../UI";
import { useIntersectionObserver } from "../../hooks";
import { setIntersectionObserverOptions } from "../../helpers";
import { CSSTransition } from "react-transition-group";
import cn from "classnames";

export const Footer = () => {
	const footerRef = useRef(null);
	const leftColumnRef = useRef(null);
	const rightColumnRef = useRef(null);
	const entryFooter = useIntersectionObserver(
		footerRef,
		setIntersectionObserverOptions()
	);
	const isFooterVisible = entryFooter?.isIntersecting;
	return (
		<footer className={styles.footer} ref={footerRef}>
			<Container className={styles.container}>
				<CSSTransition
					nodeRef={leftColumnRef}
					timeout={400}
					classNames={"fade-in"}
					in={isFooterVisible}
				>
					<div className={cn(styles.left, "fade-in")} ref={leftColumnRef}>
						<Htag className={styles.title} tag={"h3"}>
							Сотрудничество:
						</Htag>
						<a href="mailto:kasyymov.ilyar@gmail.com" className={styles.mail}>
							kasyymov.ilyar@gmail.com
						</a>
					</div>
				</CSSTransition>

				<CSSTransition
					nodeRef={rightColumnRef}
					timeout={600}
					classNames={"fade-in"}
					in={isFooterVisible}
				>
					<div className={cn(styles.right, "fade-in")} ref={rightColumnRef}>
						<Htag className={styles.title} tag={"h3"}>
							Мои социальные сети:
						</Htag>

						<SocialList center className={styles.social} />
					</div>
				</CSSTransition>
			</Container>
		</footer>
	);
};
