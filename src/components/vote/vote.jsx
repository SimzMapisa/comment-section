import React, { useState, useEffect } from 'react';

const Vote = () => {
	const [voteCount, setVoteCount] = useState(0);

	// create a function to increment votecount
	const incrementVote = () => {
		setVoteCount(voteCount + 1);
	};

	// create a function to decrement votecount
	const decrementVote = () => {
		setVoteCount(voteCount - 1);
	};

	useEffect(() => {
		setVoteCount(voteCount);
	}, []);

	return (
		<>
			<div className='vote'>
				<span className='add' onClick={incrementVote}>
					+
				</span>
				<span className='number'>{voteCount}</span>
				<span className='remove' onClick={decrementVote}>
					-
				</span>
			</div>
		</>
	);
};

export default Vote;
