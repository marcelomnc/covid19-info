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
						<NavDropdown.Item eventKey="2.1" href="/gvc/cummulative">
							Acumulado
						</NavDropdown.Item>
						<NavDropdown.Item eventKey="2.2" href="/gvc/newCases">
							Nuevos Casos
						</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title="Últimos días Colombia">
						<NavDropdown.Item eventKey="3.1" href="/lastDays/cummulative">
							Acumulado
						</NavDropdown.Item>
						<NavDropdown.Item eventKey="3.2" href="/lastDays/newCases">
							Nuevos Casos
						</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link eventKey="4" href="/about">
						Acerca de
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
