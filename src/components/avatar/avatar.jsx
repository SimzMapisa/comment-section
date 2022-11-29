import React from 'react';

const Avatar = ({ user }) => {
	return <div className={`avatar image-${user.username}`}></div>;
};

export default Avatar;
