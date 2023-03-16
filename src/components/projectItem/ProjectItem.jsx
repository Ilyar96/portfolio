import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./ProjectItem.module.scss";

export const ProjectItem = ({ as: Component = "li", className, project }) => {
	const { id, title, description, href, preview, github } = project;
	return (
		<Component className={cn(className, styles.project)}>
			<Link className={styles.link} to={href} target="_blank">
				<div className={styles.previewWrapper}>
					<LazyLoadImage className={styles.preview} src={preview} alt={title} />
				</div>
				<span className={styles.title}>{title}</span>
			</Link>
			<div className={styles.description}>{description}</div>
			{github && (
				<a href={github} className={styles.github} target="_blank">
					Ссылка на репозиторий
				</a>
			)}
		</Component>
	);
};
