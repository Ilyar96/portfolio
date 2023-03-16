import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./ProjectItem.module.scss";
import cn from "classnames";

export const ProjectItemSkeleton = ({ as: Component = "li", className }) => {
	return (
		<Component className={cn(className, styles.project, styles.skeleton)}>
			<ContentLoader
				speed={2}
				width={320}
				height={303}
				viewBox="0 0 320 303"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb"
			>
				<rect x="0" y="0" rx="5" ry="5" width="320" height="240" />
				<rect x="0" y="250" rx="3" ry="3" width="250" height="25" />
				<rect x="0" y="285" rx="3" ry="3" width="280" height="18" />
			</ContentLoader>
		</Component>
	);
};
