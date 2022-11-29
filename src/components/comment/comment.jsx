import React from 'react';
import './style.css';
import Vote from '../vote/vote';
import CommentHeader from '../comment-header/commentHeader';
import Reply from '../reply/reply';

const Comment = (data) => {
	// destructure the data
	const { comments, currentUser } = data.data;

	console.log(comments);
	return (
		<>
			{comments.map((comment) => {
				return (
					<>
						<div className='comment-container' key={comment.id}>
							<Vote vote={comment.score} />
							<div className='comment'>
								<CommentHeader comment={comment} currentUser={currentUser} />
								<div className='comment-body'>
									<p>{comment.content}</p>
								</div>
							</div>
						</div>
						<div className='replies' key={comment.replies.id}>
							{comment.replies.length !== 0 ? (
								<Reply comment={comment} />
							) : null}
						</div>
					</>
				);
			})}
		</>
	);
};
export default Comment;
