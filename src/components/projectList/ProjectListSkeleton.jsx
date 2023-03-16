import React from "react";
import cn from "classnames";
import { ProjectItemSkeleton } from "..";
import styles from "./ProjectList.module.scss";
import { projectsPerBlock } from "../../const";

export const ProjectListSkeleton = ({ as: Component = "ul", className }) => {
	const emptyArr = Array.from(Array(projectsPerBlock));

	return (
		<Component className={cn(styles.list, className)}>
			{emptyArr.map((_, i) => (
				<ProjectItemSkeleton key={i} />
			))}
		</Component>
	);
};
