import htmlIcon from "../assets/img/skills/html5.svg";
import cssIcon from "../assets/img/skills/css3.svg";
import sassIcon from "../assets/img/skills/sass.svg";
import jsIcon from "../assets/img/skills/js.svg";
import tsIcon from "../assets/img/skills/typescript.svg";
import reactIcon from "../assets/img/skills/react.svg";
import reduxIcon from "../assets/img/skills/redux.svg";
import nextIcon from "../assets/img/skills/next-js.svg";
import gitIcon from "../assets/img/skills/git.svg";
import githubIcon from "../assets/img/skills/github.svg";

export const getSkillsList = () => {
	return [
		{ id: 0, title: "HTML5", icon: htmlIcon, delay: "0.1s" },
		{ id: 1, title: "CSS3", icon: cssIcon, delay: "0.9s" },
		{ id: 2, title: "Sass", icon: sassIcon, delay: "0.3s" },
		{
			id: 3,
			title: "JavaScript",
			icon: jsIcon,
			delay: "0.7s",
		},
		{
			id: 4,
			title: "TypeScript",
			icon: tsIcon,
			delay: "0.5s",
		},
		{ id: 5, title: "React", icon: reactIcon, delay: "1s" },
		{ id: 6, title: "Redux", icon: reduxIcon, delay: "0.2s" },
		{
			id: 7,
			title: "Next",
			icon: nextIcon,
			delay: "0.8s",
		},
		{ id: 8, title: "Git", icon: gitIcon, delay: "0.4s" },
		{
			id: 9,
			title: "GitHub",
			icon: githubIcon,
			delay: "0.6s",
		},
	];
};
