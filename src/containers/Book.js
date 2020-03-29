import React, { useState, useEffect } from 'react';

import axios from 'axios';

import './Book.scss';

import Spinner from '../components/Spinner/Spinner';

import default_thumbnail from '../assets/no_img.png';

import sprite from '../assets/icons/sprite.svg';

function Book(props) {
	const [bookData, setBookData] = useState({});

	useEffect(() => {
		axios
			.get(
				`https://www.googleapis.com/books/v1/volumes/${props.match.params.id}`
			)
			.then((res) => {
				let data = res.data;
				console.log(data);

				setBookData(data);
			})
			.catch((err) => console.log(err));
	}, [props.match.params.id]);

	if (bookData === undefined || Object.keys(bookData).length === 0) {
		return (
			<div className='book'>
				<Spinner message='Loading' />
			</div>
		);
	} else {
		let {
			title,
			authors,
			publisher,
			publishedDate,
			categories,
			description,
			infoLink
		} = bookData.volumeInfo;

		let author = '';
		if (authors === undefined || authors.length === 0) {
			author = 'No author';
		} else {
			author = authors.map((item, key) => <span key={item}>{item}</span>);
		}

		let category = '';
		if (categories === undefined || categories.length === 0) {
			category = 'No categories';
		} else {
			category = categories.map((item, key) => (
				<span key={item}>{item}</span>
			));
		}

		return (
			<div className='book'>
				<div className='book__container'>
					<figure className='book__figure'>
						<img
							className='book__img'
							src={
								bookData.volumeInfo.imageLinks !== undefined
									? bookData.volumeInfo.imageLinks.thumbnail
									: default_thumbnail
							}
							alt='Book'
						/>
					</figure>
					<div className='book__info'>
						<h3 className='heading--sub'>{title}</h3>
						<div className='flex__row u-margin-top-medium'>
							<span className='text--grey'>
								<span className='text--black'>Author(s):</span>{' '}
								{author}
							</span>
						</div>
						<div className='flex__row'>
							<span className='text--grey'>
								<span className='text--black'>Publisher:</span>{' '}
								{publisher}
							</span>
							<span className='text--grey'>
								<span className='text--black'>
									Publish Date:
								</span>{' '}
								{publishedDate}
							</span>
							<span className='text--grey'>
								<span className='text--black'>
									Main Category:
								</span>{' '}
								{category}
							</span>
						</div>
						<div className='flex__row u-margin-top-medium'>
							<a
								className='btn btn--icon'
								href={infoLink}
								target={'_blank'}
								rel='noopener noreferrer'>
								<svg className='btn--icon-shape'>
									<use
										xlinkHref={`${sprite}#${'icon-external-link'}`}
									/>
								</svg>
								<span>View on Google Books</span>
							</a>
						</div>
					</div>
				</div>
				<p className='book__info text--grey u-margin-top-small'>
					{description}
				</p>
			</div>
		);
	}
}

export default Book;
