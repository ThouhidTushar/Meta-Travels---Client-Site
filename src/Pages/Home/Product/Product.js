import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
	const { product } = props;
	const { id, name, description, img } = product;
	return (
		<div className='product'>
			<div>
				<img className="img w-75" src={img} alt="" />
				<h3>{name}</h3>
				<p>{description}</p>
			</div>
			<Link to={`/booking/${ id }`}>
				<button className="btn btn-primary mb-3">Book {name}</button>
			</Link>
		</div>



	);
};

export default Product;