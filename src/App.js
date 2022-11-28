import React from 'react';
import Comment from './components/comment/comment';

import data from './data.json';

const App = () => {
	return (
		<div className='container'>
			<Comment data={data} />
		</div>
	);
};

export default App;
