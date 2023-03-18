import { Intro, ProjectsBlock, ProjectsBlockSkeleton } from "../../components";
import { useProjects } from "../../hooks";
import data from "../../data.json";

export const Home = () => {
	// const { layout, wordpress, reactProjects, isLoading } = useProjects();
	const { layout, wordpress, reactProjects } = data[0];
	const isLoading = false;
	return (
		<>
			<Intro />
			{isLoading && <ProjectsBlockSkeleton />}
			{reactProjects && (
				<ProjectsBlock title={"React"} projects={reactProjects} />
			)}
			{layout && (
				<ProjectsBlock id="layout" title={"Верстка"} projects={layout} />
			)}
			{wordpress && <ProjectsBlock title={"WordPress"} projects={wordpress} />}
		</>
	);
};
