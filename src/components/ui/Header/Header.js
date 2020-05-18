import React from "react";
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
