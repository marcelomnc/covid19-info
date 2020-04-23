import React from "react";
import Header from "../../components/ui/Header/Header";
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

export default Layout;
