import { Helmet } from "react-helmet-async";
import {
	About,
	Intro,
	ProjectsBlock,
	ProjectsBlockSkeleton,
	Reviews,
} from "../../page-components";
import { useProjects } from "../../hooks";

export const Home = () => {
	const { layout, wordpress, reactProjects, isLoading } = useProjects();
	return (
		<>
			<Helmet>
				<title>Ильяр Касыймов | Сайт-портфолио</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>

			<Intro />
			<About id="about" />
			{isLoading && <ProjectsBlockSkeleton />}
			{reactProjects && (
				<ProjectsBlock
					mainTitle="Портфолио"
					title={"React"}
					projects={reactProjects}
				/>
			)}
			{layout && <ProjectsBlock title={"Верстка"} projects={layout} />}
			{wordpress && <ProjectsBlock title={"WordPress"} projects={wordpress} />}
			<Reviews />
		</>
	);
};
