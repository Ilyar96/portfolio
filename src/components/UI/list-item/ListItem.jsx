import React from "react";
import cn from "classnames";
import styles from "./ListItem.module.scss";

export const ListItem = ({ children, className, ...props }) => {
	return (
		<li className={cn(styles.listItem, className)} {...props}>
			{children}
		</li>
	);
};
