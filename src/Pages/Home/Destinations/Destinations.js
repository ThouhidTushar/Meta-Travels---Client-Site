import React from 'react';
import Destination from '../Destination/Destination';
import destination1 from "../../../images/Destinations/destination (1).jpg"
import destination2 from "../../../images/Destinations/destination (2).jpg"
import destination3 from "../../../images/Destinations/destination (3).jpg"
import destination4 from "../../../images/Destinations/destination (4).jpg"
import destination5 from "../../../images/Destinations/destination (5).jpg"
import destination6 from "../../../images/Destinations/destination (6).jpg"



const destinations = [
	{
		img: destination1,
		name: 'Italy',
		expertize: ''
	},
	{
		img: destination2,
		name: 'Paris',
		expertize: 'Paris, Frances capital, is a major European city and a global center for art, fashion, gastronomy and culture.Its 19th - century cityscape is crisscrossed by wide boulevards and the River Seine.'
	},
	{
		img: destination3,
		name: 'New York',
		expertize: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.'
	},
	{
		img: destination4,
		name: 'Maldives',
		expertize: 'Maldives, officially the Republic of Maldives, is an archipelagic state in the Indian subcontinent of Asia, situated in the Indian Ocean.'
	},
	{
		img: destination5,
		name: 'Ireland',
		expertize: 'The Republic of Ireland occupies most of the island of Ireland, off the coast of England and Wales. Its capital, Dublin, is the birthplace of writers like Oscar Wilde, and home of Guinness beer.'
	},
	{
		img: destination6,
		name: 'Love Island',
		expertize: 'An island or isle is any piece of subcontinental land that is surrounded by water.Very small islands such as emergent land features on atolls can be called islets, skerries, cays or keys.'
	},
]
const Destinations = () => {
	return (
		<div id="destinations" className="container mt-5">
			<h1 className="text-Dark mb-5">~~Our Destinations~~</h1>
			<div className="row">
				{
					destinations.map(destination => <Destination
						key={destination.name}
						destination={destination}
					>
					</Destination>)
				}
			</div>
		</div>
	);
};

export default Destinations;