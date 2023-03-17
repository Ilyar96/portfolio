import {
	Intro,
	ProjectsBlock,
	Footer,
	ProjectsBlockSkeleton,
} from "../../components";
import { useProjects } from "../../hooks/useProjects";

export const Home = () => {
	const { layout, wordpress, reactProjects, isLoading } = useProjects();

	return (
		<div className="wrapper">
			<main>
				<Intro />
				{isLoading && <ProjectsBlockSkeleton />}
				{reactProjects && (
					<ProjectsBlock title={"React"} projects={reactProjects} />
				)}
				{layout && (
					<ProjectsBlock id="layout" title={"Верстка"} projects={layout} />
				)}
				{wordpress && (
					<ProjectsBlock title={"WordPress"} projects={wordpress} />
				)}
			</main>
			<Footer />
		</div>
	);
};
