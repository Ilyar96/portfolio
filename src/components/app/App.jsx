import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../../pages";
import "./app.scss";

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<h1>404</h1>} />
			</Routes>
		</BrowserRouter>
	);
};
