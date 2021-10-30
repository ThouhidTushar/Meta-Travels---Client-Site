import React from 'react';

const Destination = ({ destination }) => {
	const { name, img, expertize } = destination;
	return (
		<div className="col-lg-4 col-sm-6 col-12">
			<img className="rounded" src={img} alt="" />
			<h1>{name}</h1>
			{/* <h4 className="text-dark">{expertize}</h4> */}
		</div>
	);
};

export default Destination;