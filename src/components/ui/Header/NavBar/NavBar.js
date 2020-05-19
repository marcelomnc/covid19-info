import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../../../assets/images/AppLogo.svg";

const NavBar = (props) => {
	return (
		<Navbar className="NavBar" variant="dark" expand="sm">
			<Navbar.Brand className="NavBar__brand">
				<img
					alt=""
					src={logo}
					width="30"
					height="30"
					className="NavBar__brand__logo d-inline-block align-top"
				/>{" "}
				Covid19-Stats
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
				<Nav className="Nav">
					<NavDropdown title="Resumen">
						<NavDropdown.Item eventKey="1.1" href="/summary/global">
							Global
						</NavDropdown.Item>
						<NavDropdown.Item eventKey="1.2" href="/summary/country">
							Colombia
						</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title="Global vs Colombia">
						<NavDropdown.Item eventKey="2.1" href="/summary/gvc/cummulative">
							Acumulado
						</NavDropdown.Item>
						<NavDropdown.Item eventKey="2.2" href="/summary/gvc/today">
							Hoy
						</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title="Últimos días">
						<NavDropdown.Item eventKey="3" href="/lastDays/myCountry">
							Colombia
						</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link eventKey="4" href="/summary/global">
						Acerca de
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
