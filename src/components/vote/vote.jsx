import React, { useState, useEffect } from 'react';

const Vote = () => {
	// create a function to increment votecount
	const incrementVote = () => {};

	// create a function to decrement votecount
	const decrementVote = () => {};

	useEffect(() => {}, []);

	return (
		<div className='vote'>
			<span className='add' onClick={incrementVote}>
				+
			</span>
			<span className='number'>2</span>
			<span className='remove' onClick={decrementVote}>
				-
			</span>
		</div>
	);
};

export default Vote;
