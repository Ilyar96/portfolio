import React, { forwardRef } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

export const Button = forwardRef(
	(
		{
			as: Component = "button",
			children,
			appearance = "primary",
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
					{ [styles[appearance]]: appearance },
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
