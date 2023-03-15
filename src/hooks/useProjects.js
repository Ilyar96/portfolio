import { useEffect, useState } from "react";

export const useProjects = () => {
	const [layoutProjects, setLayoutProjects] = useState([]);
	const [wordpressProjects, setWordpressProjects] = useState([]);
	const [reactProjects, setReactProjects] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			const res = await fetch(import.meta.env.VITE_BASE_URL + "projects");
			const data = await res.json();
			setLayoutProjects(data[0].layout);
			setWordpressProjects(data[0].wordpress.react);
			setReactProjects(data[0].wordpress.react);
		} catch (err) {
			console.log(err.message);
		}
	};

	return {
		layout: layoutProjects,
		wordpress: wordpressProjects,
		react: reactProjects,
	};
};
