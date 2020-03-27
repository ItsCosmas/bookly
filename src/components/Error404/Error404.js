import React from 'react';

import './Error404.scss';

const Error404 = () => {
	return (
		<div className='error404'>
			<h1 className='heading--super u-center-text u-margin-top-small'>
				404! Page Not Found
			</h1>
			<p className='text--grey'>Oops! Looks like you got lost</p>
			<figure className='error404--figure u-margin-top-small'>
				<img
					src={`https://media.giphy.com/media/yRnLTbiP6TdLy/giphy-downsized.gif`}
					alt='Some Random GIF'
					className='error404--image'
				/>
			</figure>
		</div>
	);
};

export default Error404;
