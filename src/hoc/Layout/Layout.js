import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/ui/Header/Header";
import SummaryCharts from "../../components/SummaryCharts/SummaryCharts";
import Footer from "../../components/ui/Footer/Footer";

const Layout = (props) => {
	return (
		<div className="RootContainer">
			<Header />
			<main className="Main">{props.children}</main>
			<Footer />
		</div>
	);
};

Layout.propTypes = {};

export default Layout;
