import { createContext, useState } from "react";

const FavoriteContext = createContext({
	favorite: [],
	totalFavorite: 0,
	addFavorite: (favoriteMeetup) => {},
	removeFavorite: (meetupId) => {},
	itemIsFavorite: (meetupId) => {}
});

export const FavoriteContextProvider = (props) => {
	const [userFavorite, setUserFavorite] = useState([]);

	const addFavoriteHandler = (favoriteMeetup) => {
		setUserFavorite((prevUserFavorites) => {
			return prevUserFavorites.concat(favoriteMeetup);
		});
	};

	const removeFavoritehandler = (meetupId) => {
		setUserFavorite((prevUserFavorites) => {
			return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
		});
	};

	const itemIsFavoriteHandler = (meetupId) => {
		return userFavorite.some((meetup) => meetup.id === meetupId);
	};

	const context = {
		favorite: userFavorite,
		totalFavorite: userFavorite.length,
		addFavorite: addFavoriteHandler,
		removeFavorite: removeFavoritehandler,
		itemIsFavorite: itemIsFavoriteHandler
	};

	return (
		<FavoriteContext.Provider value={context}>
			{props.children}
		</FavoriteContext.Provider>
	);
};

export default FavoriteContext;
