import React from 'react';
import hero from '../assets/hero.svg';

const Hero = () => {
	return (
		<main className="w-full  ">
			<div className="px-20 w-full  flex flex-col justify-center items-center  pt-16  mx-auto">
				<div className="pt-6 text-center flex flex-col items-center justify-center w-full mx-auto">
					<h1 className="text-[8rem]  leading-none font-serif  text-gray-900 font-bold ">
						It's yours <br /> Little Lemon
					</h1>
					<p className="text-2xl flex items-center text-left justify-start gap-2 mt-2">
						{' '}
						Chicago <span className="font-light">|</span> New York{' '}
						<span className="font-light">|</span> Calfornia
					</p>
					<p className="text-xl w-2/3 leading-relaxed mt-6 ">
						We are a family owned Mediterranean restaurant, focused on
						traditional recipes served with a modern twist. Also we have a great
						selection of desserts and drinks. Vist us once and you will be back
						for more.
					</p>
					{/* Button to Reserve a Table */}
					<button className="btn">Reserve a Table</button>
					<span className="text-gray-500 pt-2">Cancel anytime*</span>
				</div>
				<div className=" ">
					<img className=" h-fit  w-[80rem]" src={hero} alt="" />
				</div>
			</div>
		</main>
	);
};

export default Hero;
