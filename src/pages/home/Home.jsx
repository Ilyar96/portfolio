import {
	About,
	Intro,
	ProjectsBlock,
	ProjectsBlockSkeleton,
} from "../../page-components";
import { useProjects } from "../../hooks";
import data from "../../data.json";

export const Home = () => {
	const { layout, wordpress, reactProjects, isLoading } = useProjects();
	// const { layout, wordpress, reactProjects } = data[0];
	// const isLoading = false;
	console.log(layout);
	return (
		<>
			<Intro />
			<About id="about" />
			{isLoading && <ProjectsBlockSkeleton />}
			{reactProjects && (
				<ProjectsBlock title={"React"} projects={reactProjects} />
			)}
			{layout && <ProjectsBlock title={"Верстка"} projects={layout} />}
			{wordpress && <ProjectsBlock title={"WordPress"} projects={wordpress} />}
		</>
	);
};
