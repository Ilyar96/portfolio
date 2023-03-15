import React from "react";
import { Intro, Projects } from "../../components";

const mockData = [
	{
		id: 0,
		title: "Личный сайт",
		description: "Описание",
		href: "https://iljar96.ru/advocate/advocate/",
		preview:
			"https://st.weblancer.net/download/5441503_250xr.jpg?time=1669010536",
	},
	{
		id: 1,
		title: "Личный сайт",
		description: "Описание",
		href: "https://iljar96.ru/advocate/advocate/",
		preview:
			"https://st.weblancer.net/download/5441503_250xr.jpg?time=1669010536",
	},
	{
		id: 2,
		title: "Личный сайт",
		description: "Описание",
		href: "https://iljar96.ru/advocate/advocate/",
		preview:
			"https://st.weblancer.net/download/5441503_250xr.jpg?time=1669010536",
	},
	{
		id: 3,
		title: "Личный сайт",
		description: "Описание",
		href: "https://iljar96.ru/advocate/advocate/",
		preview:
			"https://st.weblancer.net/download/5441503_250xr.jpg?time=1669010536",
	},
	{
		id: 4,
		title: "Личный сайт",
		description: "Описание",
		href: "https://iljar96.ru/advocate/advocate/",
		preview:
			"https://st.weblancer.net/download/5441503_250xr.jpg?time=1669010536",
	},
	{
		id: 5,
		title: "Личный сайт",
		description: "Описание",
		href: "https://iljar96.ru/advocate/advocate/",
		preview:
			"https://st.weblancer.net/download/5441503_250xr.jpg?time=1669010536",
	},
];

export const Home = () => {
	return (
		<div className="wrapper">
			<Intro />
			<Projects title={"Верстка"} projects={mockData} />
			<Projects title={"WordPress"} projects={mockData} />
			<Projects title={"React"} projects={mockData} />
		</div>
	);
};
