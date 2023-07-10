import React, { useRef, useEffect } from "react";
import cn from "classnames";
import { TransitionGroup } from "react-transition-group";
import { ProjectItem } from "../";
import { useIntersectionObserver } from "../../hooks";
import { setIntersectionObserverOptions } from "../../helpers";
import styles from "./ProjectList.module.scss";

export const ProjectList = ({
	as: Component = "ul",
	className,
	projects,
	setIsVisible,
	...props
}) => {
	const listRef = useRef(null);
	const entry = useIntersectionObserver(
		listRef,
		setIntersectionObserverOptions()
	);
	const isVisible = entry?.isIntersecting;

	useEffect(() => {
		isVisible && setIsVisible(true);
	}, [isVisible]);

	return (
		<TransitionGroup component={null}>
			<Component
				ref={listRef}
				className={cn(styles.list, className)}
				{...props}
			>
				{projects.map((project) => (
					<ProjectItem key={project.id} project={project} in={isVisible} />
				))}
			</Component>
		</TransitionGroup>
	);
};
