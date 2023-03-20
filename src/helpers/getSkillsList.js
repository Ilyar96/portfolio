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
		{ id: 0, title: "HTML5", icon: htmlIcon },
		{ id: 1, title: "CSS3", icon: cssIcon },
		{ id: 2, title: "Sass", icon: sassIcon },
		{
			id: 3,
			title: "JavaScript",
			icon: jsIcon,
		},
		{
			id: 4,
			title: "TypeScript",
			icon: tsIcon,
		},
		{ id: 5, title: "React", icon: reactIcon },
		{ id: 6, title: "Redux", icon: reduxIcon },
		{
			id: 7,
			title: "Next",
			icon: nextIcon,
		},
		{ id: 8, title: "Git", icon: gitIcon },
		{
			id: 9,
			title: "GitHub",
			icon: githubIcon,
		},
	];
};
