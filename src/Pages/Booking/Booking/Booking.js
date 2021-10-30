import React from 'react';
import { useParams } from 'react-router';
import Product from '../../Home/Product/Product';
import Packages from '../../Home/Packages/Packages';



const Booking = () => {
	const { productId } = useParams();

	return (
		<div>
			<div>
				<h1>this is booking {productId}: </h1>


			</div>

			<div>

			</div>
		</div>

	);
};

export default Booking;