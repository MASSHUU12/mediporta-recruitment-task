import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App.tsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("No element with id 'root' found");

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<CssBaseline />
		<App />
	</React.StrictMode>,
);
