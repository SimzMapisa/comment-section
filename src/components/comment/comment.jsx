import React from 'react';
import './style.css';
import reply from '../../assets/icon-reply.svg';
import amy from '../../assets/avatars/image-amyrobson.webp';
import Vote from '../vote/vote';

const Comment = () => {
	return (
		<>
			<div className='comment-container'>
				<Vote />
				<div className='comment'>
					<div className='comment-header'>
						<div className='user'>
							<div className='avatar-name'>
								<img src={amy} alt='' />
								<span className='name'>amyrobson</span>
								<span className='time'>1 month ago</span>
							</div>
						</div>
						<div className='reply-btn'>
							<img src={reply} alt='mybtn' /> <span>Reply</span>
						</div>
					</div>
					<div className='comment-body'>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Dignissimos similique sit nostrum? Accusamus veritatis
							accusantium, illo voluptatibus nostrum, officia dolores tempora
							sapiente ipsa autem voluptates qui non, aliquid officiis dicta.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default Comment;
