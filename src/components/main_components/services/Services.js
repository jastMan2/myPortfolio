import React from 'react';

import './Services.css';
import Slide from './slides/Slide';

export default function Services() {
	let slidesData = [
		{id:1, title:'lending', description:'простой одностраничный сайт хорошо подходит для портфолио', prise:'prise: 150 - 200$', link:'/'},
		{id:2, title:'web shop', description:'простой одностраничный сайт хорошо подходит для портфолио', prise:'prise: 300 - 500$', link:'/'},
		{id:3, title:'portfolio', description:'простой одностраничный сайт хорошо подходит для портфолио', prise:'prise: 150 - 200$', link:'/'},
	];

	let slideElement = slidesData
	.map(slideInfo => <Slide title={slideInfo.title} description={slideInfo.description} prise={slideInfo.prise}/>)
	return (
		<div>
			<h1 className='serviceTitle title'>какие услуги я предоставляю</h1>
			<div className='slider'>{slideElement}</div>
		</div>
	)
	const slides = document.querySelector(".product");
	let activeOrder = 0;

	slideLogik();

	function slideLogik() {
		for (let i = 0; i < slides.length; i++) {
			const slide = slides[i];

			slide.dataset.order = i;
		}
		activeOrder = Math.floor(slides.length / 2);

		update();
	}
	function update() {
		for (let i = 0; i < slides.length; i++) {
			const leftSlide = document.querySelector(
				`.slider[data-order="${activeOrder - i}"]`
			);
			const rightSlide = document.querySelector(
				`.slider[data-order="${activeOrder +i}"]`
			);
		}
	}
}
	
