import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import cn from "classnames";

import { Htag, Container, Button, Section } from "../../components/UI";
import { ProjectList } from "../../components";
import { projectsPerBlock } from "../../const";
import styles from "./ProjectsBlock.module.scss";

export const ProjectsBlock = ({
	projects = [],
	title,
	mainTitle,
	...props
}) => {
	const [visibleProjectsCount, setVisibleProjectsCount] =
		useState(projectsPerBlock);
	const [isVisible, setIsVisible] = useState(false);
	const titleRef = useRef(null);
	const subtitleRef = useRef(null);
	const buttonRef = useRef(null);

	const onClick = () => {
		setVisibleProjectsCount((prev) => prev + projectsPerBlock);
	};

	if (projects.length === 0) {
		return null;
	}

	return (
		<Section className={"with-animate"} {...props}>
			<Container>
				{mainTitle && (
					<CSSTransition
						nodeRef={titleRef}
						timeout={150}
						classNames={"fade-in"}
						in={isVisible}
					>
						<Htag
							ref={titleRef}
							tag="h2"
							className={cn(styles.h2, "fade-in")}
							center
							firstLetterColored
						>
							{mainTitle}
						</Htag>
					</CSSTransition>
				)}

				{title && (
					<CSSTransition
						nodeRef={subtitleRef}
						timeout={200}
						classNames={"fade-in-up"}
						in={isVisible}
					>
						<Htag
							ref={subtitleRef}
							tag="h3"
							className={cn(styles.h2, "fade-in-up")}
							center
						>
							{title}
						</Htag>
					</CSSTransition>
				)}

				<ProjectList
					projects={projects.slice(0, visibleProjectsCount)}
					setIsVisible={setIsVisible}
				/>

				{projects.length > visibleProjectsCount && (
					<CSSTransition
						nodeRef={buttonRef}
						timeout={800}
						classNames={"fade-in"}
						in={isVisible}
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
		</Section>
	);
};
