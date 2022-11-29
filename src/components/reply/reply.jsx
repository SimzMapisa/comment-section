import React from 'react';
import CommentHeader from '../comment-header/commentHeader';
import Vote from '../vote/vote';
import './reply.css';

const Reply = ({ comment }) => {
	const { replies } = comment;
	console.log(replies);
	return (
		<div className='reply-wrapper'>
			{replies.map((reply) => {
				return (
					<div className='comment-container reply-container'>
						<Vote vote={reply.score} />
						<div className='comment reply'>
							<CommentHeader comment={reply} />
							<div className='comment-body'>
								<p>
									<span className='replyingto'>@{reply.replyingTo}</span>
									{reply.content}
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Reply;
