import React, { forwardRef } from "react";
import cn from "classnames";
import styles from "./List.module.scss";

export const List = forwardRef(
	(
		{ children, className, as: Component = "ul", marker = true, ...props },
		ref
	) => {
		return (
			<Component
				className={cn(styles.list, className, {
					[styles.withMarker]: marker,
				})}
				ref={ref}
				{...props}
			>
				{children}
			</Component>
		);
	}
);
