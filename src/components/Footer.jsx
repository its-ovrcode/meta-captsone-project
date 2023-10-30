import React from 'react';
import logo from './../assets/icons_assets/logo.svg';
const Footer = () => {
	return (
		<footer className="bg-gray-200 py-4 sm:py-8 text-center">
			<div className="flex justify-center flex-col items-center ">
				<div className="flex flex-col gap-1 justify-center items-center">
					<img
						src={logo} // Replace with your logo's image URL
						alt="Your Logo"
						className="h-8 sm:h-12" // Adjust the height for mobile and iPad
					/>
					<span className="text-gray-600">
						5th Aveneue Central Perk, Chicago
					</span>
					<span className="text-gray-600">
						© 2021 Your Company. All rights reserved.
					</span>
				</div>
				<div
					className="flex gap-4
				 justify-center items-center"
				>
					<a
						href="#"
						className=" hover:underline" // Customize link styles
					>
						Facebook
					</a>
					<a
						href="#"
						className=" hover:underline" // Customize link styles
					>
						Instagram
					</a>
					<a
						href="#"
						className=" hover:underline" // Customize link styles
					>
						YouTube
					</a>
				</div>
			</div>
			<div className="mt-4">
				<a href="/privacy" className="text-gray-600 hover:underline">
					Privacy
				</a>
				<span className="mx-2">|</span>
				<a href="/terms" className="text-gray-600 hover:underline">
					Terms
				</a>
			</div>
		</footer>
	);
};

export default Footer;
