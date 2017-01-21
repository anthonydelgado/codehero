import React from 'react';

const Homework = ({
	params
}) => {
	return <div className="homework">Homework { params.weekId }</div>;
};

export { Homework as default };