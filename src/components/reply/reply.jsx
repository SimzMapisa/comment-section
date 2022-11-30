import React from 'react';
import CommentHeader from '../comment-header/commentHeader';
import Vote from '../vote/vote';
import './reply.css';

const Reply = () => {
	return (
		<div className='reply-wrapper'>
			<div className='comment-container reply-container'>
				<Vote />
				<div className='comment reply'>
					<CommentHeader />
					<div className='comment-body'>
						<p>
							<span className='replyingto'>@simba</span>
							Impressive! Though it seems the drag feature could be improved.
							But overall it looks incredible. You've nailed the design and the
							responsiveness at various breakpoints works really well.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reply;
