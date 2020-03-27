import React, { useContext } from 'react';
import { StateContext } from '../StateContext';

import BookCard from '../components/BookCard/BookCard';

import './Books.scss';

function Books() {
	const [state] = useContext(StateContext);
	const { book_list, heading } = state;

	if (book_list === undefined || book_list.length === 0) {
		return (
			<h1 className='heading--sub u-center-text u-margin-bottom-small u-margin-top-small'>
				Start Searching To Find Books
			</h1>
		);
	} else {
		return (
			<>
				<h3 className='heading--sub u-center-text u-margin-bottom-small u-margin-top-small'>
					{heading}
				</h3>

				<div className='books'>
					{book_list.map((item) => (
						// console.log(item)

						<BookCard
							key={item.id}
							book={item.volumeInfo}
							book_id={item.id}
						/>
					))}
				</div>
			</>
		);
	}
}

export default Books;
