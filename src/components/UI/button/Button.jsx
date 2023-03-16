import React from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

export const Button = ({
	as: Component = "button",
	children,
	type = "primary",
	className,
	fullWidth,
	...props
}) => {
	return (
		<Component
			className={cn(
				styles.button,
				className,
				{ [styles[type]]: type },
				{ [styles.fullWidth]: fullWidth }
			)}
			{...props}
		>
			{children}
		</Component>
	);
};
