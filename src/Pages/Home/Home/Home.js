
import React from 'react';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import Destinations from '../Destinations/Destinations';
import Packages from '../Packages/Packages';
import WriteUs from '../WriteUs/WriteUs';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Packages></Packages>
			<Destinations></Destinations>
			<CustomerReview></CustomerReview>
			<WriteUs></WriteUs>
		</div>
	);
};

export default Home;