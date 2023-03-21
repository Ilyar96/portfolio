import React, { forwardRef } from "react";
import cn from "classnames";
import styles from "./Htag.module.scss";

export const Htag = forwardRef(
	(
		{
			tag: Component,
			className,
			firstLetterColored,
			center,
			children,
			...props
		},
		ref
	) => {
		return (
			<Component
				className={cn(
					className,
					styles[Component],
					{ [styles.firstLetterColored]: firstLetterColored },
					{ [styles.center]: center }
				)}
				ref={ref}
				{...props}
			>
				{children}
			</Component>
		);
	}
);
