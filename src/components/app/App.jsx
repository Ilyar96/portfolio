import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import cn from "classnames";
import { Home } from "../../pages";
import { Footer } from "../";
import { useScrollDirection } from "../../hooks";
import "react-toastify/dist/ReactToastify.css";
import "./app.scss";

export const App = () => {
	const wrapperRef = useRef(null);
	const scrollDirection = useScrollDirection(wrapperRef);

	return (
		<>
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
			<ToastContainer />
		</>
	);
};
