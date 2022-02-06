import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoriteContext from "../../store/favorites-context";

// CSS modules
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
	const favoriteCtx = useContext(FavoriteContext);

	return (
		<header className={classes.header}>
			<div className={classes.logo}>React Meetups</div>
			<nav>
				<ul>
					<li>
						<Link to='/'>All Meetups</Link>
					</li>
					<li>
						<Link to='/new-meetups'>New Meetups</Link>
					</li>
					<li>
						<Link to='/favorites'>
							Favorites{" "}
							<span className={classes.badge}>{favoriteCtx.totalFavorite}</span>
						</Link>
					</li>
					<li>
						<Link to='/error'>Error</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
