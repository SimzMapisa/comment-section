import React, { createContext, useState, useEffect } from 'react';
import data from '../data/data.json';

// create a context named Comment Context
export const CommentContext = createContext();

// write a function with children parameter to handle the context
const CommentContextProvider = ({ children }) => {
	// create a state to store the comments
	const [comments, setComments] = useState([]);
	const [currentUser, setCurrentUser] = useState({});

	const getData = () => {
		try {
			const [comments] = data;
			const [user] = data;

			const currentUser = user.currentUser;
			const res = comments.comments;

			setCurrentUser(currentUser);
			setComments(res);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<CommentContext.Provider value={{ comments, currentUser }}>
			{children}
		</CommentContext.Provider>
	);
};

export default CommentContextProvider;
