import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { App } from "./components";
import "normalize.css";
import "./assets/scss/variables.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<HelmetProvider>
			<App />
		</HelmetProvider>
	</React.StrictMode>
);
