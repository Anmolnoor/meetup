import React from "react";
import { useNavigate } from "react-router-dom";
import NewMeetupform from "../components/meetups/NewMeetupform";

const New = () => {
	const navigate = useNavigate();
	const addMeetupHandler = (meetupData) => {
		fetch("https://meetups-7ef17-default-rtdb.firebaseio.com/meetups.json", {
			method: "POST",
			body: JSON.stringify(meetupData),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(navigate("/", { replace: true }));
	};
	return (
		<section>
			<h1>Add New Meetups</h1>
			<NewMeetupform onAddMeetups={addMeetupHandler} />
		</section>
	);
};

export default New;
