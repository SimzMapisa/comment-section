import React from 'react';
import Comment from './components/comment/comment';
import CommentContextProvider from './Context/commentContext';

const App = () => {
	return (
		<CommentContextProvider>
			<div className='container'>
				<Comment />
			</div>
		</CommentContextProvider>
	);
};

export default App;
