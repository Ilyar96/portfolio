import { Intro, Projects } from "../../components";
import { useProjects } from "../../hooks/useProjects";

export const Home = () => {
	const { layout, wordpress, react } = useProjects();

	return (
		<div className="wrapper">
			<Intro />
			{layout && <Projects title={"Верстка"} projects={layout} />}
			{wordpress && <Projects title={"WordPress"} projects={wordpress} />}
			{react && <Projects title={"React"} projects={react} />}
		</div>
	);
};
