import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import cn from "classnames";
import { Htag, Container, Button } from "../UI";
import { ProjectList } from "..";
import { projectsPerBlock } from "../../const";
import { useIntersectionObserver } from "../../hooks";
import { setIntersectionObserverOptions } from "../../helpers";
import styles from "./ProjectsBlock.module.scss";

export const ProjectsBlock = ({ projects = [], title, ...props }) => {
	const [visibleProjectsCount, setVisibleProjectsCount] =
		useState(projectsPerBlock);
	const titleRef = useRef(null);
	const buttonRef = useRef(null);
	const entryTitle = useIntersectionObserver(
		titleRef,
		setIntersectionObserverOptions()
	);
	const entryButton = useIntersectionObserver(
		buttonRef,
		setIntersectionObserverOptions()
	);
	const isTitleVisible = entryTitle?.isIntersecting;
	const isButtonVisible = entryButton?.isIntersecting;

	const onClick = () => {
		setVisibleProjectsCount((prev) => prev + projectsPerBlock);
	};

	if (projects.length === 0) {
		return null;
	}

	return (
		<section className={cn(styles.root, "with-animate")} {...props}>
			<Container>
				{title && (
					<CSSTransition
						nodeRef={titleRef}
						timeout={100}
						classNames={"fade-in-up"}
						in={isTitleVisible}
					>
						<Htag
							ref={titleRef}
							tag="h2"
							className={cn(styles.h2, "fade-in-up")}
						>
							{title}
						</Htag>
					</CSSTransition>
				)}

				<ProjectList projects={projects.slice(0, visibleProjectsCount)} />

				{projects.length > visibleProjectsCount && (
					<CSSTransition
						nodeRef={buttonRef}
						timeout={100}
						classNames={"fade-in"}
						in={isButtonVisible}
					>
						<Button
							ref={buttonRef}
							fullWidth
							className={cn(styles.more, "fade-in")}
							onClick={onClick}
						>
							Загрузить еще
						</Button>
					</CSSTransition>
				)}
			</Container>
		</section>
	);
};
