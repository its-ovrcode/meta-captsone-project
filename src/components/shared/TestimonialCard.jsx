import React from 'react';

const TestimonialCard = ({avatar, name, said, rating}) => {
	return (
		<div className="rounded-2xl bg-[#ffdce7] text-center flex flex-col items-center justify-center  gap-4  w-[600px] p-6 min-h-[200px]">
			<div className="flex flex-col items-center  justify-center">
				<img src={avatar} className="w-24 h-24" alt={`${name}'s Avatar`} />
				<h2 className="font-semibold text-2xl">{name}</h2>
			</div>
			<p className="text-xl">"{said}"</p>
			<p className="text-2xl">{rating}</p>
		</div>
	);
};

export default TestimonialCard;
