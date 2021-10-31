import React from 'react';
import { useParams } from 'react-router';
import { Card, Button } from 'react-bootstrap';
import Product from '../../Home/Product/Product';
import Packages from '../../Home/Packages/Packages';



const Booking = ({ }) => {
	const { productId } = useParams();


	return (
		<div>

			<Packages></Packages>

			<div>
				<h1>Booking</h1>
			</div>

			<div className="row mx-5 d-flex justify-content-center">

				<Card className="mx-5 mt-5" style={{ width: '40rem' }}>
					<Card.Img variant="top" src="https://i.ibb.co/8NVnWDt/services-1.jpg" />
					<Card.Body>
						<Card.Title>Pyramid</Card.Title>
						<Card.Text>
							A pyramid is a structure whose outer surfaces are triangular and converge to a single step at the top
						</Card.Text>
						<Button variant="primary">Book Now</Button>
					</Card.Body>
				</Card>

				<Card className="mx-5 mt-5" style={{ width: '40rem' }}>
					<Card.Img variant="top" src="https://i.ibb.co/G2WtrG3/services-2.jpg" />
					<Card.Body>
						<Card.Title>Florance</Card.Title>
						<Card.Text>
							Florence, capital of Italy’s Tuscany region, is home to many masterpieces of Renaissance art and architecture.
						</Card.Text>
						<Button variant="primary">Book Now</Button>
					</Card.Body>
				</Card>

				<Card className="mx-5 mt-5" style={{ width: '40rem' }}>
					<Card.Img variant="top" src="https://i.ibb.co/WtjgJzN/services-3.jpg" />
					<Card.Body>
						<Card.Title>Greenland</Card.Title>
						<Card.Text>
							Surgery is a medical or dental specialty that uses operative manual and instrumental.
						</Card.Text>
						<Button variant="primary">Book Now</Button>
					</Card.Body>
				</Card>

				<Card className="mx-5 mt-5" style={{ width: '40rem' }}>
					<Card.Img variant="top" src="https://i.ibb.co/52tJmGD/services-4.jpg" />
					<Card.Body>
						<Card.Title>Louvre Museum</Card.Title>
						<Card.Text>
							The Louvre, or the Louvre Museum, is the world's most-visited museum and a historic monument in Paris, France.
						</Card.Text>
						<Button variant="primary">Book Now</Button>
					</Card.Body>
				</Card>


				<Card className="mx-5 mt-5" style={{ width: '40rem' }}>
					<Card.Img variant="top" src="https://i.ibb.co/fY2ZLPV/services-5.jpg" />
					<Card.Body>
						<Card.Title>Maldives</Card.Title>
						<Card.Text>
							Maldives, officially the Republic of Maldives, is an archipelagic state in the Indian subcontinent of Asia, situated in the Indian Ocean.
						</Card.Text>
						<Button variant="primary">Book Now</Button>
					</Card.Body>
				</Card>


				<Card className="mx-5 mt-5" style={{ width: '40rem' }}>
					<Card.Img variant="top" src="https://i.ibb.co/KKmR5kD/services-6.jpg" />
					<Card.Body>
						<Card.Title>Tajmahal</Card.Title>
						<Card.Text>
							An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife.
						</Card.Text>
						<Button variant="primary">Book Now</Button>
					</Card.Body>
				</Card>

			</div>
		</div>

	);
};

export default Booking;