import React from 'react';
import aboutImage from './../assets/about.svg';
const About = () => {
	return (
		<section className="bg-[#F3DEA4] min-h-screen relative ">
			<h2 className="h2-bold">About</h2>
			<p className="text-2xl max-w-7xl mx-auto text-center m-8 leading-relaxed">
				Little Lemon is a family-owned Mediterranean restaurant that has been
				serving the Chicago community for over 20 years. What started as a small
				cafe serving traditional Greek recipes has grown to include influences
				from Italy, Turkey and North Africa. We focus on using high-quality,
				seasonal ingredients to prepare classics like pizza, pasta and
				bruschetta with a modern approach.
			</p>
			<p className="text-2xl max-w-7xl mx-auto text-center pb-12 m-8 leading-relaxed">
				In addition to the a la carte menu, we also offer full-service catering
				for private events from intimate gatherings to large corporate
				functions. Our dedicated team brings the same care and attention to
				off-site events as they do to the dining experience in our warm,
				welcoming restaurant. Stop in today to experience the flavors of the
				Mediterranean with a side of Midwest hospitality only Little Lemon can
				provide. Whether you're looking for takeout, dine-in or an event, we're
				ready to make your meal one to remember.
			</p>

			<div className="sticky  -translate-y-8 bottom-2 z-30">
				<img src={aboutImage} alt="" />
			</div>
		</section>
	);
};

export default About;
