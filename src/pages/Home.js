import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

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
