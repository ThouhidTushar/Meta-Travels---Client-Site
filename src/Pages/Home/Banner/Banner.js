import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/banner (1).jpg'
import banner2 from '../../../images/Banner/banner (2).jpg'
import banner3 from '../../../images/Banner/banner (3).jpg'


const Banner = () => {
	return (
		<div >
			<Carousel fade>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={banner1}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h1>Magnificent Maldives</h1>

					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className="d-block w-100"
						src={banner2}
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h1>Amazing Caribbean Islands</h1>

					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className="d-block w-100"
						src={banner3}
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h1>Incredible Iceland</h1>

					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Banner;