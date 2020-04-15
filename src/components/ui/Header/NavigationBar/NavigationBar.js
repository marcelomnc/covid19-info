import React from "react";
import PropTypes from "prop-types";
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
						to="/summary/gvc/cummulative"
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
						Últimos 10 Días - Mi País
					</NavLink>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
			</ul>
			<hr></hr>
		</nav>
	);
};

NavigationBar.propTypes = {};

export default NavigationBar;
