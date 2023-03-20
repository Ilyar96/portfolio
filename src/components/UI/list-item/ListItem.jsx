import React, { forwardRef } from "react";
import cn from "classnames";
import styles from "./ListItem.module.scss";

export const ListItem = forwardRef(({ children, className, ...props }, ref) => {
	return (
		<li className={cn(styles.listItem, className)} ref={ref} {...props}>
			{children}
		</li>
	);
});
