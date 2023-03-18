import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../../pages";
import { Footer } from "../";
import { useScrollDirection } from "../../hooks";
import "./app.scss";
import cn from "classnames";

export const App = () => {
	const wrapperRef = useRef(null);
	const scrollDirection = useScrollDirection(wrapperRef);

	return (
		<div className={cn("wrapper", `scroll-direction-${scrollDirection}`)}>
			<main>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="*" element={<h1>404</h1>} />
					</Routes>
				</BrowserRouter>
			</main>
			<Footer />
		</div>
	);
};
