import React, { useRef } from "react";
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
	...props
}) => {
	const listRef = useRef(null);
	const entry = useIntersectionObserver(
		listRef,
		setIntersectionObserverOptions()
	);
	const isVisible = entry?.isIntersecting;

	return (
		<TransitionGroup component={null}>
			<Component
				ref={listRef}
				className={cn(styles.list, className)}
				{...props}
			>
				{projects.map((project, i) => (
					<ProjectItem key={project.id} project={project} in={isVisible} />
				))}
			</Component>
		</TransitionGroup>
	);
};
