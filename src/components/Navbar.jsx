import React from 'react';
import logo from '../assets/icons_assets/Logo.svg';
import {navItems} from '../constants/constants';
import {Link} from 'react-router-dom';
const Navbar = () => {
	return (
		<nav className="w-full mx-auto max-w-7xl mb-6 mt-6 flex  justify-between items-center">
			{/* Logo */}
			{<img src={logo} alt="" className="h-20 w-auto" />}
			<div>
				<ul className="flex gap-6">
					{navItems.map((i, idx) => {
						return (
							<li
								className="text-xl hover:underline underline-offset-4 transition-all duration-500 ease-linear"
								key={i.name}
							>
								<Link to={i.route}>{i.name}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
