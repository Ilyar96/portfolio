import React from "react";
import cn from "classnames";
import { ProjectItem } from "../";
import styles from "./ProjectList.module.scss";

export const ProjectList = ({ as: Component = "ul", className, projects }) => {
	return (
		<Component className={cn(styles.list, className)}>
			{projects.map((project) => (
				<ProjectItem key={project.id} project={project} />
			))}
		</Component>
	);
};
