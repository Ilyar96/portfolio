import {
	Intro,
	ProjectsBlock,
	Footer,
	ProjectsBlockSkeleton,
} from "../../components";
import { useProjects } from "../../hooks/useProjects";

export const Home = () => {
	const { layout, wordpress, reactProjects, isLoading } = useProjects();
	console.log(wordpress);

	return (
		<div className="wrapper">
			<main>
				<Intro />
				{isLoading && <ProjectsBlockSkeleton />}
				{layout && (
					<ProjectsBlock id="layout" title={"Верстка"} projects={layout} />
				)}
				{wordpress && (
					<ProjectsBlock title={"WordPress"} projects={wordpress} />
				)}
				{reactProjects && (
					<ProjectsBlock title={"React"} projects={reactProjects} />
				)}
			</main>

			<Footer />
		</div>
	);
};
