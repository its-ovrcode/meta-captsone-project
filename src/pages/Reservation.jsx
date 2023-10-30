import React from 'react';
import BookingForm from '../components/BookingForm';

const Reservation = ({
	availableTimes,
	setAvailableTimes,
	isReserved,
	setIsReserved,
}) => {
	return (
		<section className="min-h-screen max-w-7xl bg-[#f6f6f6] rounded-t-3xl mx-auto flex flex-col justify-start items-center">
			<h2 className="h2-bold">Reservation</h2>
			<BookingForm
				availableTimes={availableTimes}
				setAvailableTimes={setAvailableTimes}
				isReserved={isReserved}
				setIsReserved={setIsReserved}
			/>
		</section>
	);
};

export default Reservation;
