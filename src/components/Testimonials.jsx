import React from 'react';
import TestimonialCard from './shared/TestimonialCard';
import {testimonials} from '../constants/constants';

const Testimonials = () => {
	return (
		<section
			id="testimonials"
			className=" min-h-screen text-center bg-[#FDE5E3] w-full py-16"
		>
			<h2 className="h2-bold pb-12">Testimonials</h2>
			<div className=" max-w-7xl mx-auto flex flex-wrap  gap-5">
				{testimonials.map((testimonial, idx) => (
					<div key={idx} className={idx % 2 === 0 ? '-rotate-2' : 'rotate-2'}>
						<TestimonialCard
							avatar={testimonial.image}
							name={testimonial.name}
							said={testimonial.says}
							rating={testimonial.rating}
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
