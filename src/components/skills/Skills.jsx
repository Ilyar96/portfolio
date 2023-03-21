import React, { useRef, forwardRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { LazyLoadImage } from "react-lazy-load-image-component";
import cn from "classnames";
import { getSkillsList } from "../../helpers";
import { List, ListItem } from "../UI";
import styles from "./Skills.module.scss";

const skillList = getSkillsList();

export const Skills = forwardRef(({ isVisible, ...props }, ref) => {
	const skillListWithRef = skillList.map((skill) => ({
		...skill,
		ref: useRef(null),
	}));

	return (
		<TransitionGroup component={null}>
			<List className={styles.root} marker={false} ref={ref} {...props}>
				{skillListWithRef.map(({ id, title, icon, ref, delay }) => (
					<CSSTransition
						nodeRef={ref}
						timeout={400}
						classNames={"fade-in"}
						in={isVisible}
						key={id}
					>
						<ListItem
							className={cn(styles.listItem, "fade-in")}
							style={{ transitionDelay: delay }}
							ref={ref}
						>
							<LazyLoadImage className={styles.icon} src={icon} alt={title} />
							<span className={styles.title}>{title}</span>
						</ListItem>
					</CSSTransition>
				))}
			</List>
		</TransitionGroup>
	);
});
