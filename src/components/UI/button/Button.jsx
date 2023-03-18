import React, { forwardRef } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

export const Button = forwardRef(
	(
		{
			as: Component = "button",
			children,
			type = "primary",
			className,
			fullWidth,
			...props
		},
		ref
	) => {
		return (
			<Component
				className={cn(
					styles.button,
					className,
					{ [styles[type]]: type },
					{ [styles.fullWidth]: fullWidth }
				)}
				ref={ref}
				{...props}
			>
				{children}
			</Component>
		);
	}
);
