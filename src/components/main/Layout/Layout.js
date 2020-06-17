import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => {
	return (
		<div className="RootContainer">
			<Header />
			<main className="Main">{props.children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
