import React from "react";
import cn from "classnames";
import styles from "./P.module.scss";

export const P = ({ children, className, ...props }) => {
	return (
		<p className={cn(styles.p, className)} {...props}>
			{children}
		</p>
	);
};
