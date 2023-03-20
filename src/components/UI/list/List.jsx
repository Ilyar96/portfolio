import React from "react";
import cn from "classnames";
import styles from "./List.module.scss";

export const List = ({
	children,
	className,
	as: Component = "ul",
	...props
}) => {
	return (
		<Component className={cn(styles.list, className)} {...props}>
			{children}
		</Component>
	);
};
