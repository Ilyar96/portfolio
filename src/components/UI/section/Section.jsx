import React, { forwardRef } from "react";
import styles from "./Section.module.scss";
import cn from "classnames";

export const Section = forwardRef(({ children, className, ...props }, ref) => {
	return (
		<section className={cn(styles.root, className)} ref={ref} {...props}>
			{children}
		</section>
	);
});
