import React from 'react';
import {menuCardItems} from '../constants/constants';
import MenuCard from './shared/MenuCard';
const Menu = () => {
	return (
		<section className="bg-[#a7d7d4] flex flex-col items-center pb-8  w-full h-fit -mt-28 z-30">
			<h2 className="h2-bold">Our Specials</h2>
			<div className="flex mt-16 gap-6 px-16 justify-center items-center w-full mx-auto">
				{menuCardItems.map((menu, idx) => {
					return (
						<MenuCard
							key={idx}
							foodTitle={menu.name}
							foodImage={menu.image}
							foodBrief={menu.about}
						/>
					);
				})}
			</div>
			<button
				className="p-4 mt-16 hover:bg-gray-100 underline-offset-2 rounded-xl text-2xl  transition-all duration-100 ease-linear
				"
			>
				Online Menu
			</button>
		</section>
	);
};

export default Menu;
