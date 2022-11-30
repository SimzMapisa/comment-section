import React from 'react';
import reply from '../../assets/icon-reply.svg';
import Avatar from '../avatar/avatar';

const CommentHeader = () => {
	return (
		<div className='comment-header'>
			<div className='user'>
				<div className='avatar-name'>
					<Avatar />
					<span className='name'></span>
					<span className='time'></span>
				</div>
			</div>
			<div className='reply-btn'>
				<img src={reply} alt='mybtn' /> <span>Reply</span>
			</div>
		</div>
	);
};

export default CommentHeader;
