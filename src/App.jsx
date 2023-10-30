import React, {useReducer, useState} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import {Route, Routes} from 'react-router-dom';
import Reservation from './pages/Reservation';

const App = () => {
	// Do Prop Drilling from BookingForm to Reservation
	const [availableTimes, setAvailableTimes] = useReducer('17:00');
	const [isReserved, setIsReserved] = useState(false);
	const updateTime = time => {
		console.log('Change Time');
	};
	return (
		<div className="  mx-auto">
			<Navbar />
			{isReserved && <p>your table is Reserver at {availableTimes}</p>}
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Hero />
							<Menu />
							<Testimonials />
							<About />
						</>
					}
				/>
				<Route
					path="/reservations"
					element={
						<Reservation
							availableTimes={availableTimes}
							setAvailableTimes={setAvailableTimes}
							isReserved={isReserved}
							setIsReserved={setIsReserved}
						/>
					}
				/>
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
