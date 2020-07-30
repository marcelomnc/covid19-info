import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/App.css";
import "./assets/styles/Modal.css";
import "./assets/styles/LoadingSpinner.css";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Layout from "./components/main/Layout/Layout";
import * as ABComparisonTypes from "./components/ABComparison/Types";
import ABComparison from "./components/ABComparison/ABComparison";
import LastXDays from "./components/LastXDays/LastXDays";
import About from "./components/About/About";

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
								ABComparisonTypes.GLOBAL_CUMULATIVE_VS_TODAY_COMPARISON
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
								ABComparisonTypes.COUNTRY_CUMULATIVE_VS_TODAY_COMPARISON
							}
						/>
					);
				}}
			/>
			<Route
				path="/gvc/cumulative"
				exact
				render={() => {
					return (
						<ABComparison
							aBComparisonType={
								ABComparisonTypes.GLOBAL_VS_COUNTRY_CUMULATIVE_COMPARISON
							}
						/>
					);
				}}
			/>
			<Route
				path="/gvc/newCases"
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
				path="/lastDays/cumulative"
				exact
				render={() => {
					return <LastXDays totalDays={7} isCumulative />;
				}}
			/>
			<Route
				path="/lastDays/newCases"
				exact
				render={() => {
					return <LastXDays totalDays={7} />;
				}}
			/>
			<Route
				path="/about"
				exact
				render={() => {
					return <About />;
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
