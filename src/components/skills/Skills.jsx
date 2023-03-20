import React, { useRef, forwardRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { getSkillsList } from "../../helpers";
import { List, ListItem } from "../UI";
import styles from "./Skills.module.scss";
import cn from "classnames";

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
					>
						<ListItem
							className={cn(styles.listItem, "fade-in")}
							key={id}
							ref={ref}
							style={{ transitionDelay: delay }}
						>
							<img className={styles.icon} src={icon} alt={title} />
							<span className={styles.title}>{title}</span>
						</ListItem>
					</CSSTransition>
				))}
			</List>
		</TransitionGroup>
	);
});
