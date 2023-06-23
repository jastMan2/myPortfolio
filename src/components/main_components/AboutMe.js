import React from 'react'

import './AboutMe.css';

export default function AboutMe() {
	return (
		<div className='aboutMe wrapper'>
			<h1 className='title'>КТО Я?</h1>
			<div className='description'>
				Я веб разработчик с 3 летним опытом работы.<br/>Делаю сайты любого типа сложности
			</div>
			<div className='aboutMe_container'>
				{/* ========== */}
				<div className='whyI'>
					<h2 className='subtitle'>ПОЧЕМУ МЕНЯ ВЫБИРАЮТ?</h2>
					<div className='items'>
						<div className='item'>
							<h3>1</h3>
							<p>Уникальный<br/> дизайн</p>
						</div>
						<div className='item'>
							<h3>2</h3>
							<p>Самая<br/> выгодная цена</p>
						</div>
						<div className='item'>
							<h3>3</h3>
							<p>Сопровождение<br/> клиента 24/7</p>
						</div>
					</div>
				</div>
				{/* ========== */}
				<div className='myExp'>
					<div className='item2'>
						<h3>10+</h3>
						<p>Проектов<br/> реализовано</p>
					</div>
					<div className='item2'>
						<h3>3</h3>
						<p>Года<br/> опыта работ</p>
					</div>
					<div className='item2'>
						<h3>5</h3>
						<p>Лет<br/> практических работ</p>
					</div>
				</div>
				{/* ========= */}
			</div>
		</div>
	)
}
