import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import {Route, Routes} from 'react-router-dom';
import Reservation from './pages/Reservation';

const App = () => {
	return (
		<div className="  mx-auto">
			<Navbar />

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
				<Route path="/reservations" element={<Reservation />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
