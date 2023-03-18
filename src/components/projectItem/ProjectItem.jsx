import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CSSTransition } from "react-transition-group";
import { Lightbox } from "../";
import styles from "./ProjectItem.module.scss";

export const ProjectItem = ({
	as: Component = "li",
	className,
	project,
	in: inProp,
	...props
}) => {
	const [isLightboxOpen, setIsLightboxOpen] = useState(false);
	const { title, tags, href, preview, github, gallery } = project;
	const nodeRef = useRef(null);

	const onClick = () => {
		setIsLightboxOpen((prev) => !prev);
	};

	return (
		<>
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
					<div className={styles.previewWrapper}>
						<LazyLoadImage
							className={styles.preview}
							src={preview}
							alt={title}
							onClick={onClick}
							data-tooltip-id="tooltip"
							data-tooltip-content="Посмотреть полную версию"
							data-tooltip-place="top"
						/>
					</div>
					<Link className={styles.link} to={href} target="_blank">
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

			{isLightboxOpen && (
				<Lightbox
					open={isLightboxOpen}
					slides={[{ src: gallery ? gallery : preview }]}
					close={() => setIsLightboxOpen(false)}
				/>
			)}
		</>
	);
};
