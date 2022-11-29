import React, { useState, useEffect } from 'react';

const Vote = (vote) => {
	console.log(vote.vote);
	const [score, setScore] = useState(vote.vote);
	const [voteCount, setVoteCount] = useState(score);

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
