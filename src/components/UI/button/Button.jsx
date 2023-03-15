import React from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

export const Button = ({
	children,
	type = "primary",
	className,
	fullWidth,
	...props
}) => {
	return (
		<button
			className={cn(
				styles.button,
				className,
				{ [styles[type]]: type },
				{ [styles.fullWidth]: fullWidth }
			)}
			{...props}
		>
			{children}
		</button>
	);
};
