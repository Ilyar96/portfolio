import React from "react";
import { getSkillsList } from "../../helpers";
import { List, ListItem } from "../UI";
import styles from "./Skills.module.scss";

const skillList = getSkillsList();

export const Skills = () => {
	return (
		<List className={styles.root} marker={false}>
			{skillList.map(({ id, title, icon }) => (
				<ListItem className={styles.listItem} key={id}>
					<img className={styles.icon} src={icon} alt={title} />
					<span className={styles.title}>{title}</span>
				</ListItem>
			))}
		</List>
	);
};
