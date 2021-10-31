import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import Logo from '../../../images/Banner/Meta2.png';

const Header = () => {
	const { user, logOut } = useAuth();
	return (
		<>
			<Navbar bg="secondary" variant="dark" collapseOnSelect expand="lg">
				<Container>
					<Navbar.Brand href="#home"><img className="w-25" src={Logo} alt="" /></Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end ">

						<Nav.Link as={HashLink} to="/home#home" className="text-light"><h5>Home</h5>
						</Nav.Link>
						<Nav.Link as={HashLink} to="/home#products" className="text-light"><h6>Products</h6>
						</Nav.Link>
						<Nav.Link as={HashLink} to="/home#destinations" className="text-light"><h6>Destinations</h6>
						</Nav.Link>
						<Nav.Link as={HashLink} to="/booknow" className="text-light"><h6>My Booking</h6>
						</Nav.Link>
						<Nav.Link as={HashLink} to="/aboutUs" className="text-light"><h6>About Us</h6>
						</Nav.Link>


						{user?.email ?
							<Button onClick={logOut} variant="light">Logout</Button> :
							<Nav.Link as={Link} to="/login" className="text-light"><h6>Login</h6>
							</Nav.Link>}

						<Navbar.Text>
							Signed in as: <a href="#login">{user?.displayName}</a>
						</Navbar.Text>

					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;