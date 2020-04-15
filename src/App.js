import React from "react";
import "./assets/styles/App.css";
import "./assets/styles/LoadingSpinner.css";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import GlobalComparison from "./components/GlobalComparison/GlobalComparison";
import CountryComparison from "./components/CountryComparison/CountryComparison";
import GvCComparisonCummulative from "./components/GvCComparison/Cummulative/Cummulative";
import GvCComparisonToday from "./components/GvCComparison/Today/Today";
import Last10DaysMyCountry from "./components/Last10Days/MyCountry/MyCountry"
import Layout from "./hoc/Layout/Layout";
import Modal from "./components/ui/Modal/Modal";
import LoadingSpinner from './components/ui/LoadingSpinner/LoadingSpinner'

function App() {
	let routes = (
		<Switch>
			<Route path="/" exact component={GlobalComparison} />
			<Route path="/summary/global" exact component={GlobalComparison} />
			<Route path="/summary/country" exact component={CountryComparison} />
			<Route
				path="/summary/gvc/cummulative"
				exact
				component={GvCComparisonCummulative}
			/>
			<Route path="/summary/gvc/today" exact component={GvCComparisonToday} />
			<Route path="/lastDays/myCountry" exact component={Last10DaysMyCountry} />
			<Route
				path="/test"
				exact
				render={() => {
					return (
						<Modal show={true} onClickHandler={() => alert('OELO')}>
							<h1>Esto es un titulo en el modal</h1>
						</Modal>
					);
				}}
			/>
			<Route
				path="/testSpinner"
				exact
				component={LoadingSpinner}
			/>
			<Redirect to="/" />
		</Switch>
	);

	return (
		<>
			<Layout>{routes}</Layout>
		</>
	);
}

export default withRouter(App);
