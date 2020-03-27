import React from 'react';

function SearchBar() {
	return (
		<form action='' className='searchbar'>
			<input
				type='search'
				className='searchbar__input'
				placeholder='Search'
			/>
			<button className='searchbar__button'>
				<svg className='searchbar__icon'>
					<use xlinkHref='/assets/icons/sprite.svg#icon-search' />
				</svg>
			</button>
		</form>
	);
}

export default SearchBar;
