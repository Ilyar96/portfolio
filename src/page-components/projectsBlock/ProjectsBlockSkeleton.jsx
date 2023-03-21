import React from "react";
import ContentLoader from "react-content-loader";
import { Htag, Container } from "../../components/UI";
import { ProjectListSkeleton } from "../../components";
import styles from "./ProjectsBlock.module.scss";

export const ProjectsBlockSkeleton = ({ ...props }) => {
	return (
		<section className={styles.root} {...props}>
			<Container>
				<Htag tag="h2" className={styles.h2} center>
					<ContentLoader
						speed={2}
						width={320}
						height={46}
						viewBox="0 0 320 46"
						backgroundColor="#f3f3f3"
						foregroundColor="#ecebeb"
					>
						<rect x="0" y="0" rx="3" ry="3" width="320" height="46" />
					</ContentLoader>
				</Htag>

				<Htag tag="h3" className={styles.h2} center>
					<ContentLoader
						speed={2}
						width={240}
						height={43}
						viewBox="0 0 240 43"
						backgroundColor="#f3f3f3"
						foregroundColor="#ecebeb"
					>
						<rect x="0" y="0" rx="3" ry="3" width="320" height="46" />
					</ContentLoader>
				</Htag>

				<ProjectListSkeleton />

				<ContentLoader
					className={styles.more}
					speed={2}
					width={1100}
					height={50}
					viewBox="0 0 1100 50"
					backgroundColor="#f3f3f3"
					foregroundColor="#ecebeb"
				>
					<rect x="0" y="0" rx="5" ry="5" width="1100" height="50" />
				</ContentLoader>
			</Container>
		</section>
	);
};
