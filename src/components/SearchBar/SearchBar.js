import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { StateContext } from '../../StateContext';

import './SearchBar.scss';

import sprite from '../../assets/icons/sprite.svg';

function SearchBar() {
	const [state, setState] = useContext(StateContext);
	const [userInput, setUserInput] = useState('');
	const [bookName, setBookName] = useState('');

	useEffect(() => {
		axios
			.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`)
			.then((res) => {
				let book_list = res.data.items;
				setState({
					book_list: book_list,
					heading: 'Search Results'
				});
			})
			.catch((err) => console.log(err));
	}, [bookName]);

	const findBook = (e) => {
		e.preventDefault();
		setBookName(userInput);
	};

	const onChange = (e) => {
		setUserInput(e.target.value);
	};
	return (
		<form className='searchbar' onSubmit={findBook}>
			<input
				type='search'
				className='searchbar__input'
				placeholder='Search for a book'
				value={userInput}
				onChange={onChange}
			/>
			<button className='searchbar__button'>
				<svg className='searchbar__icon'>
					<use xlinkHref={`${sprite}#icon-search`} />
				</svg>
			</button>
		</form>
	);
}

export default SearchBar;
