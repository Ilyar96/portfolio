import React from "react";
import { Htag, Container, Button } from "../UI";
import { ProjectList } from "../";
import styles from "./Projects.module.scss";

export const Projects = ({ projects = [], title }) => {
	if (projects.length === 0) {
		return null;
	}

	return (
		<section className={styles.root}>
			<Container>
				{title && (
					<Htag tag="h2" className={styles.h2}>
						{title}
					</Htag>
				)}
				<ProjectList projects={projects} />
				<Button fullWidth className={styles.more}>
					Загрузить еще
				</Button>
			</Container>
		</section>
	);
};
