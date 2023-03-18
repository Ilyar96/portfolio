import React, { useRef } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CSSTransition } from "react-transition-group";
import styles from "./ProjectItem.module.scss";

export const ProjectItem = ({
	as: Component = "li",
	className,
	project,
	in: inProp,
	...props
}) => {
	const { title, tags, href, preview, github } = project;
	const nodeRef = useRef(null);

	return (
		<CSSTransition
			nodeRef={nodeRef}
			timeout={100}
			classNames={"project"}
			in={inProp}
		>
			<Component
				className={cn(className, styles.project)}
				ref={nodeRef}
				{...props}
			>
				<Link className={styles.link} to={href} target="_blank">
					<div className={styles.previewWrapper}>
						<LazyLoadImage
							className={styles.preview}
							src={preview}
							alt={title}
						/>
					</div>
					<span className={styles.title}>{title}</span>
				</Link>
				<div className={styles.tags}>{tags}</div>
				{github && (
					<a href={github} className={styles.github} target="_blank">
						Перейти к репозиторию
					</a>
				)}
			</Component>
		</CSSTransition>
	);
};
