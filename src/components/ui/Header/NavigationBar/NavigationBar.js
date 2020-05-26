import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = (props) => {
	return (
		<nav className="NavigationBar">
			<ul>
				<li>
					<NavLink
						activeClassName="NavigationItemActive"
						to="/summary/global"
						exact
					>
						Global
					</NavLink>
				</li>
				<li>
					<NavLink
						activeClassName="NavigationItemActive"
						to="/summary/country"
						exact
					>
						Mi Pa&iacute;s
					</NavLink>
				</li>
				<li>
					<NavLink
						activeClassName="NavigationItemActive"
						to="/summary/gvc/cumulative"
						exact
					>
						GvP - Acumulado
					</NavLink>
				</li>
				<li>
					<NavLink
						activeClassName="NavigationItemActive"
						to="/summary/gvc/today"
						exact
					>
						GvP - Hoy
					</NavLink>
				</li>
				<li>
					<NavLink
						activeClassName="NavigationItemActive"
						to="/lastDays/myCountry"
						exact
					>
						Últimos 7 Días - Mi País
					</NavLink>
				</li>
				<li>
					<a href="#">About</a>
				</li>
			</ul>
			<hr></hr>
		</nav>
	);
};

export default NavigationBar;
