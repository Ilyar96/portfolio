import React from "react";
import styles from "./Section.module.scss";
import cn from "classnames";

export const Section = ({ children, className, ...props }) => {
	return (
		<section className={cn(styles.root, className)} {...props}>
			{children}
		</section>
	);
};
