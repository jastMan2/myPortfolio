import React from 'react'

import './MyStack.css';
import Image from '../Image';
import html from '../../images/html.svg';
import css from '../../images/css.svg';
import js from '../../images/js.svg';
import react from '../../images/react.svg';
import wp from '../../images/wp.svg';
import node from '../../images/node.svg';

export default function MyStack() {
	return (
		<div className='myStack wrapper'>
			<h2 className='stack_title title'>мой стек технологий</h2>
			<div className='items wrapper'>
				<div><Image image={html}/></div>
				<div><Image image={css} /></div>
				<div><Image image={js} /></div>
				<div><Image image={react} /></div>
				<div><Image image={wp} /></div>
				<div><Image image={node} /></div>
			</div>
		</div>
	)
}
