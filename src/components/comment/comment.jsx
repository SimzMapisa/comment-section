import React from 'react';
import './style.css';
import Vote from '../vote/vote';
import CommentHeader from '../comment-header/commentHeader';
import { useContext } from 'react';
import Reply from '../reply/reply';
import { CommentContext } from '../../Context/commentContext';

const Comment = () => {
	const { comments, currentUser } = useContext(CommentContext);
	console.log(currentUser);
	return (
		<>
			{comments.map((comment) => (
				<div key={comment.id}>
					<div className='comment-container'>
						<Vote />
						<div className='comment'>
							<CommentHeader />
							<div className='comment-body'>
								<p>
									Impressive! Though it seems the drag feature could be
									improved. But overall it looks incredible. You've nailed the
									design and the responsiveness at various breakpoints works
									really well.
								</p>
							</div>
						</div>
					</div>
					<div className='replies'></div>
				</div>
			))}
		</>
	);
};
export default Comment;
