import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Packages.css'

const Packages = () => {
	const [packages, setPackages] = useState([])

	useEffect(() => {
		fetch('/products.json')
			.then(res => res.json())
			.then(data => setPackages(data))
	}, [])


	return (
		<div id="packages" className="mt-5 container">
			<h1>Our Best Selling Packages</h1>
			<div className="product-container mt-5 row">
				{
					packages.map(product => <Product
						key={product.id}
						name={product.name}
						product={product}
					></Product>)
				}
			</div>
		</div>
	);
};

export default Packages;