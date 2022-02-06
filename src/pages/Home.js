import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
	{
		id: "m1",
		title: "This is a first meetup",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
		address: "Meetupstreet 5, 12345 Meetup City",
		description:
			"This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
	},
	{
		id: "m2",
		title: "This is a second meetup",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
		address: "Meetupstreet 5, 12345 Meetup City",
		description:
			"This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
	}
];
const Home = () => {
	const [loader, setloader] = useState(true);
	const [data, setData] = useState([]);

	const fetchData = () => {
		setloader(true);
		fetch("https://meetups-7ef17-default-rtdb.firebaseio.com/meetups.json")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				const meetups = [];

				for (const key in data) {
					const meetup = {
						id: key,
						...data[key]
					};

					meetups.push(meetup);
				}
				setData(meetups);
				setloader(false);
			});
	};

	useEffect(fetchData, []);

	return loader ? (
		<center>
			<h1>Loading...</h1>
		</center>
	) : (
		<section>
			<h1>All Meetups</h1>
			<MeetupList meetups={data} />
		</section>
	);
};

export default Home;
