import React from "react";
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

export default Header;
