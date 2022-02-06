import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FavoriteContextProvider } from "./store/favorites-context";
// import MyRouter from "./routes/routes";

ReactDOM.render(
	<FavoriteContextProvider>
		<App />
	</FavoriteContextProvider>,
	document.getElementById("root")
);
