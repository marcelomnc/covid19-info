import React from "react";
import "./assets/styles/App.css";
import "./assets/styles/LoadingSpinner.css";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import ABComparison from "./components/ABComparison/ABComparison";
import * as ABComparisonTypes from "./components/ABComparison/Types";
import LastXDays from "./components/LastXDays/LastXDays";
import Layout from "./hoc/Layout/Layout";

function App() {
	let routes = (
		<Switch>
			<Route
				path="/summary/global"
				exact
				render={() => {
					return (
						<ABComparison
							aBComparisonType={
								ABComparisonTypes.GLOBAL_CUMMULATIVE_VS_TODAY_COMPARISON
							}
						/>
					);
				}}
			/>
			<Route
				path="/summary/country"
				exact
				render={() => {
					return (
						<ABComparison
							aBComparisonType={
								ABComparisonTypes.COUNTRY_CUMMULATIVE_VS_TODAY_COMPARISON
							}
						/>
					);
				}}
			/>
			<Route
				path="/summary/gvc/cummulative"
				exact
				render={() => {
					return (
						<ABComparison
							aBComparisonType={
								ABComparisonTypes.GLOBAL_VS_COUNTRY_CUMMULATIVE_COMPARISON
							}
						/>
					);
				}}
			/>
			<Route
				path="/summary/gvc/today"
				render={() => {
					return (
						<ABComparison
							aBComparisonType={
								ABComparisonTypes.GLOBAL_VS_COUNTRY_TODAY_COMPARISON
							}
						/>
					);
				}}
			/>
			<Route
				path="/lastDays/myCountry"
				exact
				render={() => {
					return <LastXDays totalDays={7} />;
				}}
			/>
			<Redirect to="/summary/global" />
		</Switch>
	);

	return (
		<>
			<Layout>{routes}</Layout>
		</>
	);
}

export default withRouter(App);
