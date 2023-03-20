import React, { forwardRef } from "react";
import cn from "classnames";
import styles from "./P.module.scss";

export const P = forwardRef(({ children, className, ...props }, ref) => {
	return (
		<p className={cn(styles.p, className)} ref={ref} {...props}>
			{children}
		</p>
	);
});
