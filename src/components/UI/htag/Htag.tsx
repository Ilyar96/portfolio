import React, { forwardRef } from 'react';
import cn from 'classnames';
import styles from './Htag.module.scss';

export const Htag = forwardRef(({ tag, className, children, ...props }, ref) => {
	switch (tag) {
		case 'h1':
			return <h1 className={cn(className, styles.h1)} ref={ref} {...props}>{children}</h1>;
		case 'h2':
			return <h2 className={cn(className, styles.h2)} ref={ref} {...props}>{children}</h2>;
		case 'h3':
			return <h3 className={cn(className, styles.h3)} ref={ref} {...props}>{children}</h3>;
		default:
			return <>{children}</>;
	}
});
