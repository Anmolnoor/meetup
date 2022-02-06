import React from "react";
import Navigation from "./MainNavigation";
import classes from "./Layout.module.css";

const Layout = (props) => {
	return (
		<div>
			<Navigation />
			<main className={classes.main}>{props.children}</main>
		</div>
	);
};

export default Layout;
