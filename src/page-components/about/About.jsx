import React, { useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import cn from "classnames";
import {
	Container,
	Htag,
	Section,
	P,
	List,
	ListItem,
} from "../../components/UI";
import { Skills } from "../../components";
import {
	setIntersectionObserverOptions,
	setDurationByIndex,
} from "../../helpers";
import { useIntersectionObserver } from "../../hooks";
import styles from "./About.module.scss";

export const About = ({ ...props }) => {
	const titleRef = useRef(null);
	const pRef = useRef(null);
	const lastPRef = useRef(null);
	const skillsTitleRef = useRef(null);
	const skillListRef = useRef(null);
	const taskList = [
		{
			title:
				"Верстка адаптивных и кросбраузерных сайтов разной сложности с использованием HTML5, CSS3, Javascript, Gulp, Webpack.",
			ref: useRef(null),
		},
		{
			title:
				"Создание корпоративных сайтов, лендингов, интернет-магазинов,	используя cms WordPress.",
			ref: useRef(null),
		},
		{ title: "Оптимизация скорости загрузки сайта.", ref: useRef(null) },
	];

	const entryTitle = useIntersectionObserver(
		titleRef,
		setIntersectionObserverOptions()
	);
	const skillsEntry = useIntersectionObserver(
		skillListRef,
		setIntersectionObserverOptions()
	);
	const isTitleVisible = entryTitle?.isIntersecting;
	const isSkillsVisible = skillsEntry?.isIntersecting;

	return (
		<Section {...props}>
			<Container>
				<CSSTransition
					nodeRef={titleRef}
					timeout={100}
					classNames={"fade-in-up"}
					in={isTitleVisible}
				>
					<Htag
						ref={titleRef}
						tag="h2"
						className={cn(styles.h2, "fade-in-up")}
						center
						firstLetterColored
					>
						Обо мне
					</Htag>
				</CSSTransition>

				<CSSTransition
					nodeRef={pRef}
					timeout={400}
					classNames={"fade-in"}
					in={isTitleVisible}
				>
					<P ref={pRef} className="fade-in">
						Привет! Я являюсь web-разработчиком. На протяжении 2 лет занимаюсь
						разработкой web-сайтов в качестве фрилансера. Список задач с
						которыми чаще всего сталкиваюсь:
					</P>
				</CSSTransition>

				<TransitionGroup component={null}>
					<List>
						{taskList.map(({ title, ref }, i) => (
							<CSSTransition
								nodeRef={ref}
								timeout={500}
								classNames={"fade-in-left"}
								in={isTitleVisible}
								key={i}
							>
								<ListItem
									ref={ref}
									className="fade-in-left"
									style={{ transitionDelay: setDurationByIndex(i) }}
								>
									{title}
								</ListItem>
							</CSSTransition>
						))}
					</List>
				</TransitionGroup>

				<CSSTransition
					nodeRef={lastPRef}
					timeout={1000}
					classNames={"fade-in"}
					in={isTitleVisible}
				>
					<P ref={lastPRef} className="fade-in">
						Параллельно работе улучшаю свои знания и навыки в сфере
						frontend-разработки.
					</P>
				</CSSTransition>

				<CSSTransition
					nodeRef={skillsTitleRef}
					timeout={200}
					classNames={"fade-in"}
					in={isSkillsVisible}
				>
					<Htag
						tag="h3"
						className={cn(styles.h3, "fade-in")}
						center
						ref={skillsTitleRef}
					>
						Технические навыки:
					</Htag>
				</CSSTransition>

				<Skills isVisible={isSkillsVisible} ref={skillListRef} />
			</Container>
		</Section>
	);
};
