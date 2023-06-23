import React from 'react'

import './Slide.css';

export default function Slide(props) {
	return (
		<div className='product'>
			<h3 className='serviceName'>{props.title}</h3>
			<div className='serviceDescription'>{props.description}</div>
			<a className='link' href={props.link}><span>примеры</span></a>
			<div className='prise'>{props.prise}</div>
		</div>
	)
}
