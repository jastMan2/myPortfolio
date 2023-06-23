import React from 'react';

import Image from '../Image';
import mainscreen from '../../images/main-screen.svg';
import './MainScreen.css';
import hallo from '../../images/hallo.svg';
import arrow from '../../images/arrow.svg';

export default function mainScreen() {
	return (
		<>
			<div className='mainScreen wrapper'>
			<div className='mainContent'>
				<div className='text'>
					<div className='hallo'><Image image={hallo} /></div>
					<div className='text_block1'>Thank you my friend for visiting my website.</div>
					<div className='text_block2'>Here you can get acquainted with my work, as well as my skills, and
																			order a website for any task.</div>
					<div className='text_block3'>I hope you will be comfortable here.</div>
				</div>
				<div className='mainScreen_image'><Image image={mainscreen} /></div>
			</div>
				<div className='arrow'><Image image={arrow} /></div>
			</div>
		</>
	)
}
