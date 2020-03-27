import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

import './Nav.scss';

export default function Nav() {
	return (
		<nav className='navigation'>
			<Link className='text--link text--brand text--white' to='/'>
				Bookly ..|
			</Link>
			<SearchBar />
			<Link
				className='text--link text--white text--navigation'
				to='/about'>
				About
			</Link>
		</nav>
	);
}
