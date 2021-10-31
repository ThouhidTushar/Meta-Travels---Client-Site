import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Product from '../Product/Product';
import './Packages.css'

const Packages = () => {
	const [packages, setPackages] = useState([])

	useEffect(() => {
		fetch('https://cryptic-woodland-86992.herokuapp.com/products')
			.then(res => res.json())
			.then(data => setPackages(data))
	}, [])


	return (
		<div id="packages" className="mt-5 container">

			<h1>Our Best Selling Packages</h1>

			{
				packages.length === 0 ?
					<Spinner animation="border" variant="secondary" />
					:
					<div className="product-container mt-5 row">
						{
							packages.map(product => <Product
								key={product.id}
								name={product.name}
								product={product}
							></Product>)
						}
					</div>
			}
		</div>
	);
};

export default Packages;