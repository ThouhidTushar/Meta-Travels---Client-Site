
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AboutUs from './Pages/AboutUs/AboutUs';
import Appoinment from './Pages/Appoinment/Appoinment';
import Booking from './Pages/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Packages from './Pages/Home/Packages/Packages';
import Product from './Pages/Home/Product/Product';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';


function App() {
	return (
		<div className="App">

			<AuthProvider>
				<Router>
					<Header></Header>
					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>

						<Route exact path="/home">
							<Home></Home>
						</Route>

						<Route path="/login">
							<Login></Login>
						</Route>

						<Route path="/products">
							<Product></Product>
						</Route>


						<PrivateRoute path="/booknow">
							<Appoinment></Appoinment>
						</PrivateRoute>

						<PrivateRoute path="/aboutUs">
							<AboutUs></AboutUs>
						</PrivateRoute>

						<Route path="/booking/:productId">
							<Booking></Booking>
						</Route>

						<Route path="*">
							<NotFound></NotFound>
						</Route>

					</Switch>
					<Footer></Footer>
				</Router>

			</AuthProvider>
		</div>
	);
}

export default App;

