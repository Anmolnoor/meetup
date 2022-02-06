import React, { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoriteContext from "../store/favorites-context";

const Favroite = () => {
	const favoriteCtx = useContext(FavoriteContext);

	let content;

	if (favoriteCtx.totalFavorite === 0) {
		content = <p>You got no favorite yet. Start adding some?</p>;
	} else {
		content = <MeetupList meetups={favoriteCtx.favorite} />;
	}

	return (
		<section>
			<h1>My Favorites</h1>
			{content}
		</section>
	);
};

export default Favroite;
