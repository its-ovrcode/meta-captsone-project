import React, {useState, useEffect, useReducer} from 'react';
import {Link} from 'react-router-dom';

const BookingForm = ({
	availableTimes,
	setAvailableTimes,
	isReserved,
	setIsReserved,
}) => {
	const [date, setDate] = useState('');
	// const [state, dispatch] = useReducer(reducerMethod, initialValue)
	const [guests, setGuests] = useState(1);
	const [occasion, setOccasion] = useState('Birthday');
	const [name, setName] = useState('');

	// const handleSubmit = e => {
	// 	e.preventDefault();
	// 	setIsReserved(true);
	// };

	if (isReserved) {
		return (
			<div className=" w-full mx-auto flex justify-center items-center">
				<div>
					<h2 className="text-2xl bg-emerald-400 rounded-3xl p-6 w-fit  ">
						This is reserved under {name} at {availableTimes} on {date} as per
						the occassion of {occasion}
					</h2>
					<Link to="/">Back to Home</Link>
				</div>
			</div>
		);
	}
	return (
		<div className="mt-10">
			<form className="gap-5 min-w-[700px] px-20 flex flex-col flex-wrap justify-start">
				<div className="form-div">
					<label htmlFor="res-name" className="label">
						Your Name
					</label>
					<input
						type="text"
						className="input text-xl"
						value={name}
						onChange={e => {
							setName(e.target.value);
						}}
					/>
				</div>
				<div className="form-div">
					<label className="label" htmlFor="res-date">
						Choose date
					</label>
					<input
						className="input"
						required
						type="date"
						id="res-date"
						value={date}
						onChange={e => setDate(e.target.value)}
					/>
				</div>

				<div className="form-div">
					<label className="label" htmlFor="res-time">
						Choose Time
					</label>
					<select
						className="input"
						required
						id="res-time"
						value={availableTimes}
						onChange={e => setAvailableTimes(e.target.value)}
					>
						<option value="17:00">17:00</option>
						<option value="18:00">18:00</option>
						<option value="19:00">19:00</option>
						<option value="20:00">20:00</option>
						<option value="21:00">21:00</option>
						<option value="22:00">22:00</option>
					</select>
				</div>
				<div className="form-div">
					<label className="label" htmlFor="guests">
						Number of guests
					</label>
					<input
						required
						className="input"
						type="number"
						placeholder="1"
						min="1"
						max="10"
						id="guests"
						value={guests}
						onChange={e => setGuests(e.target.value)}
					/>
				</div>
				<div className="form-div">
					<label htmlFor="occasion" className="label">
						Occasion
					</label>
					<select
						id="occasion"
						className="input"
						value={occasion}
						onChange={e => setOccasion(e.target.value)}
					>
						<option value="Birthday">Birthday</option>
						<option value="Anniversary">Anniversary</option>
					</select>
				</div>
				<button
					className="btn"
					type="submit"
					onClick={e => (e.preventDefault(), setIsReserved(true))}
				>
					Make Your reservation
				</button>
			</form>
		</div>
	);
};

export default BookingForm;
