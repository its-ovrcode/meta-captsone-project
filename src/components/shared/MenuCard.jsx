import React from 'react';
import image from '../../assets/menuimages/pizza.svg';
const MenuCard = ({foodTitle, foodBrief, foodImage}) => {
	return (
		<div className="w-1/3 min-h-[14rem] flex flex-col gap-0 ">
			<img
				className="h-full  rounded-t-3xl w-auto object-cover"
				src={foodImage}
			/>
			<div className="w-full bg-[#573240] pb-12 rounded-b-3xl text-white px-6 pt-4 flex flex-col justify-center  items-start">
				<h3 className="font-bold text-[2.5rem] text-[#F1B103] ">{foodTitle}</h3>
				<p className="pt-2">{foodBrief}</p>
				<button
					className="p-4 bg-[#F1B103] rounded-lg mt-4 text-white font-bold text-xl
					hover:bg-[#F1B103]/80 transition-all duration-100 ease-linear
				"
				>
					Order Now
				</button>
			</div>
		</div>
	);
};

export default MenuCard;
