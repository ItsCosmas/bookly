import React from 'react';

import './About.scss';

function About() {
	return (
		<div className='about'>
			<h1 className='heading--sub'>About Bookly</h1>
			<p className='text--grey u-margin-top-medium'>
				Bookly helps you search for Books from the Google Books API
			</p>
			<p className='text--grey u-margin-top-small'>
				Open Source and available on github at:{' '}
				<span className='about--link'>
					https://github.com/ItsCosmas/bookly
				</span>
			</p>
		</div>
	);
}

export default About;
