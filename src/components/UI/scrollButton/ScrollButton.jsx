import React from "react";
import styles from "./ScrollButton.module.scss";
import cn from "classnames";

export const ScrollButton = ({
	as: Component = "button",
	className,
	...props
}) => {
	return (
		<Component
			aria-hidden="true"
			className={cn(className, styles.scroll)}
			{...props}
		>
			<svg
				width="80px"
				height="80px"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				stroke="#fff"
				strokeWidth={1}
				strokeLinecap="round"
				strokeLinejoin="miter"
			>
				<polyline points="7 13 12 18 17 13" />
				<polyline points="7 7 12 12 17 7" />
			</svg>
		</Component>
	);
};
