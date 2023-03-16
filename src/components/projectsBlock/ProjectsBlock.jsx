import React, { useState } from "react";
import { Htag, Container, Button } from "../UI";
import { ProjectList } from "..";
import { projectsPerBlock } from "../../const";
import styles from "./ProjectsBlock.module.scss";

export const ProjectsBlock = ({ projects = [], title, ...props }) => {
	if (projects.length === 0) {
		return null;
	}

	const [visibleProjectsCount, setVisibleProjectsCount] =
		useState(projectsPerBlock);

	const onClick = () => {
		setVisibleProjectsCount((prev) => prev + projectsPerBlock);
	};

	return (
		<section className={styles.root} {...props}>
			<Container>
				{title && (
					<Htag tag="h2" className={styles.h2}>
						{title}
					</Htag>
				)}

				<ProjectList projects={projects.slice(0, visibleProjectsCount)} />

				{projects.length > visibleProjectsCount && (
					<Button fullWidth className={styles.more} onClick={onClick}>
						Загрузить еще
					</Button>
				)}
			</Container>
		</section>
	);
};
