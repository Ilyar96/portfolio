import React from 'react';
import styles from './Htag.module.scss';
import cn from 'classnames';

export const Htag = ({ tag, className, children, ...props }) => {
	switch (tag) {
		case 'h1':
			return <h1 className={cn(className, styles.h1)} {...props}>{children}</h1>;
		case 'h2':
			return <h2 className={cn(className, styles.h2)} {...props}>{children}</h2>;
		case 'h3':
			return <h3 className={cn(className, styles.h3)} {...props}>{children}</h3>;
		default:
			return <>{children}</>;
	}
};
