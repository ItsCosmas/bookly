import React from 'react';
import { Link } from 'react-router-dom';

import './BookCard.scss';

import default_thumbnail from '../../assets/no_image.png';

function BookCard(props) {
	let { title, imageLinks, authors } = props.book;

	let book_id = props.book_id;

	let author = '';
	if (authors === undefined || authors.length === 0) {
		author = 'No author';
	} else {
		author = authors.map((item, key) => <span key={item}>{item}</span>);
	}

	return (
		<div className='book-card'>
			<figure className='book-card__figure'>
				<Link to={`book/${book_id}`}>
					<img
						className='book-card__img'
						src={
							imageLinks !== undefined
								? imageLinks.thumbnail
								: default_thumbnail
						}
						alt='Book'
					/>
				</Link>
			</figure>
			<Link to={`book/${book_id}`} className='text--link'>
				<div className='book-card__content' role='link'>
					<span className='text--black'>{title}</span>
					<span className='text--grey'>{author}</span>
				</div>
			</Link>
		</div>
	);
}

export default BookCard;
