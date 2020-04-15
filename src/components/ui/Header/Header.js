import React from "react";
import PropTypes from "prop-types";
import TitleBar from "./TitleBar/TitleBar";
import NavigationBar from "./NavigationBar/NavigationBar";

const Header = (props) => {
	return (
		<header className="Header">
			<TitleBar />
			<NavigationBar />
		</header>
	);
};

Header.propTypes = {};

export default Header;
