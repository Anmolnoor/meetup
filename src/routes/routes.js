import {
	BrowserRouter as Router,
	Routes,
	Route,
	Outlet
} from "react-router-dom";

//  ---  pages  ---
import Home from "../pages/Home";
import Favroite from "../pages/Favroite";
import New from "../pages/New";
import Layout from "../components/layout/Layout";

//   ---  layout  ---

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
			<Layout>
				<Routes>
					<Route path='/' element={<Outlet />} exact>
						<Route path='' element={<Home />} exact />
						<Route path='favorites' element={<Favroite />} />
						<Route path='new-meetups' element={<New />} />
					</Route>
					<Route path='*' element={<Error />} />
				</Routes>
			</Layout>
		</Router>
	);
};

export default MyRouter;
