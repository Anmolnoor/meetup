import React, { useRef } from "react";
import Card from "../ui/Card";

//  ---  css  ---
import classes from "./NewMeetupForm.module.css";

const NewMeetupform = (props) => {
	const titleRef = useRef();
	const imageRef = useRef();
	const addressRef = useRef();
	const descriptionRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		const meetupData = {
			title: titleRef.current.value,
			image: imageRef.current.value,
			address: addressRef.current.value,
			description: descriptionRef.current.value
		};

		props.onAddMeetups(meetupData);
	};

	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='title'>Meetup Title</label>
					<input type='text' required id='title' ref={titleRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='image'>Meetup Image</label>
					<input type='url' required id='image' ref={imageRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='address'>Address</label>
					<input type='text' required id='address' ref={addressRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='description'>Description</label>
					<textarea
						name='description'
						id='description'
						cols='30'
						ref={descriptionRef}
						rows='5'></textarea>
				</div>
				<div className={classes.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	);
};

export default NewMeetupform;
