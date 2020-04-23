import React from "react";
import "./assets/styles/App.css";
import "./assets/styles/LoadingSpinner.css";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import ABComparison from "./components/ABComparison/ABComparison";
import * as ABComparisonTypes from "./components/ABComparison/Types";
import Last10Days from "./components/Last10Days/Last10Days";
import Layout from "./hoc/Layout/Layout";
import Modal from "./components/ui/Modal/Modal";
import LoadingSpinner from "./components/ui/LoadingSpinner/LoadingSpinner";

function App() {
	let routes = (
		<Switch>
			<Route
				path="/"
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
					return <Last10Days />;
				}}
			/>
			<Route
				path="/test"
				exact
				render={() => {
					return (
						<Modal show={true} onClickHandler={() => alert("OELO")}>
							<h1>Esto es un titulo en el modal</h1>
						</Modal>
					);
				}}
			/>
			<Route path="/testSpinner" exact component={LoadingSpinner} />
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
