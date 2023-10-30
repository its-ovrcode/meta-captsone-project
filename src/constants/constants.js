export const navItems = [
	{
		name: 'Home',
		route: '#home',
	},
	{
		name: 'About',
		route: '#about',
	},
	{
		name: 'Menu',
		route: '#menu',
	},
	{
		name: 'Reservations',
		route: '/reservations',
	},
	{
		name: 'Order Online',
		route: '#order-online',
	},
	{
		name: 'Login',
		route: '#login',
	},
];

import pizza from '../assets/menuimages/pizza.svg';
import hotdogs from '../assets/menuimages/hotdogs.svg';
import noodles from '../assets/menuimages/noodles.svg';

export const menuCardItems = [
	{
		id: 1,
		name: 'Pizza',
		about: `The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.`,
		image: pizza,
	},
	{
		id: 2,
		name: 'Hot Dogs',
		about:
			'Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.',
		image: hotdogs,
	},
	{
		id: 3,
		name: 'Noodles',
		about: `This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined. And it's delicious!`,
		image: noodles,
	},
];

import tommy from '../assets/user/tommy.png';
import alex from '../assets/user/alex.png';
import brady from '../assets/user/brady.png';
import diana from '../assets/user/diana.png';
import lenny from '../assets/user/lenny.png';
import felix from '../assets/user/felix.png';

export const testimonials = [
	{
		name: 'Tommy',
		image: tommy,
		rating: '5 ⭐️⭐️⭐️⭐️⭐️',
		says: `The food is amazing, the service is great and the atmosphere is just perfect. I love it!`,
	},
	{
		name: 'Alex',
		image: alex,
		rating: '4.2 ⭐️⭐️⭐️⭐️',
		says: `I love eating at Restaurant. The food is amazing and the service is great!`,
	},
	{
		name: 'Brady',
		image: brady,
		rating: ' 4.3 ⭐️⭐️⭐️⭐️',
		says: `The food is amazing, the service is great and the atmosphere is just perfect. I love it!`,
	},
	{
		name: 'Diana',
		image: diana,
		rating: '4.5 ⭐️⭐️⭐️⭐️',
		says: `I love eating at Restaurant. The food is amazing and the service is great!`,
	},
	{
		name: 'Lenny',
		image: lenny,
		rating: '4.8 ⭐️⭐️⭐️⭐️⭐️',
		says: `The food is amazing, the service is great and the atmosphere is just perfect. I love it!`,
	},
	{
		name: 'Felix',
		image: felix,
		rating: '4.2 ⭐️⭐️⭐️⭐️',
		says: `I love eating at Restaurant. The food is amazing and the service is great!`,
	},
];
