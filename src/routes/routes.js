import {
	BrowserRouter as Router,
	Routes,
	Route,
	Outlet,
	Navigate
} from "react-router-dom";

//  ---  pages  ---
import Home from "../pages/Home";
import Favroite from "../pages/Favroite";
import New from "../pages/New";

const MyRouter = () => {
	const Error = () => {
		return (
			<>
				<center>
					<h1>this Page does not exist bro</h1>
				</center>
			</>
		);
	};

	return (
		<Router>
			<Routes>
				<Route path='/' element={<Outlet />} exact>
					<Route path='' element={<Home />} exact />
					<Route path='favroites' element={<Favroite />} />
					<Route path='new-meetup' element={<New />} />
				</Route>
				<Route path='*' element={<Error />} />
			</Routes>
		</Router>
	);
};

export default MyRouter;
