import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
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
import { setIntersectionObserverOptions } from "../../helpers";
import { useIntersectionObserver } from "../../hooks";
import styles from "./About.module.scss";

export const About = ({ ...props }) => {
	const titleRef = useRef(null);
	const entryTitle = useIntersectionObserver(
		titleRef,
		setIntersectionObserverOptions()
	);
	const isTitleVisible = entryTitle?.isIntersecting;

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

				<P>
					Привет! Я являюсь web-разработчиком. На протяжении 2 лет занимаюсь
					разработкой web-сайтов в качестве фрилансера. Список задач с которыми
					чаще всего сталкиваюсь:
				</P>
				<List>
					<ListItem>
						Верстка адаптивных и кросбраузерных сайтов разной сложности с
						использованием HTML5, CSS3, Javascript, Gulp, Webpack.
					</ListItem>
					<ListItem>
						Создание корпоративных сайтов, лендингов, интернет-магазинов,
						используя cms WordPress.
					</ListItem>
					<ListItem>Оптимизация скорости загрузки сайта.</ListItem>
				</List>
				<P>
					Параллельно работе улучшаю свои знания и навыки в сфере
					frontend-разработки.
				</P>

				<Htag tag="h3" className={cn(styles.h3)} center>
					Технические навыки:
				</Htag>

				<Skills></Skills>
			</Container>
		</Section>
	);
};
