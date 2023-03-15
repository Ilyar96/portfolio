import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectItem.module.scss";
import cn from "classnames";

export const ProjectItem = ({ as: Component = "li", className, project }) => {
	const { id, title, description, href, preview } = project;
	return (
		<Component className={cn(className, styles.project)}>
			<Link className={styles.link} to={href}>
				<img className={styles.preview} src={preview} alt={title} />
				<span className={styles.title}>{title}</span>
			</Link>
			<div className={styles.description}>{description}</div>
		</Component>
	);
};
