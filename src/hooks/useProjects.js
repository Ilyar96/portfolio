import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useProjects = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [layoutProjects, setLayoutProjects] = useState([]);
	const [wordpressProjects, setWordpressProjects] = useState([]);
	const [reactProjects, setReactProjects] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		setIsLoading(true);
		try {
			const res = await fetch(import.meta.env.VITE_BASE_URL + "projects");
			const data = await res.json();
			setLayoutProjects(data[0].layout);
			setWordpressProjects(data[0].wordpress);
			setReactProjects(data[0].react);
		} catch (err) {
			toast.error(
				"Не удалось загрузить данные. Повторите попытку чуть позже.",
				{
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				}
			);
		}
		setIsLoading(false);
	};

	return {
		layout: layoutProjects,
		wordpress: wordpressProjects,
		reactProjects,
		isLoading,
	};
};
