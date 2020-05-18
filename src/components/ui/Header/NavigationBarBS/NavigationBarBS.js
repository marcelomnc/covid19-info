import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavigationBarBS = (props) => {
	return (
		<Navbar bg="dark" variant="dark" expand="sm">
			<Navbar.Brand href="#home">Covid19 - Stats</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
				<Nav>
					<NavDropdown title="Resumen">
						<NavDropdown.Item href="/summary/global">Global</NavDropdown.Item>
						<NavDropdown.Item href="/summary/country">
							Colombia
						</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title="Global vs Colombia">
						<NavDropdown.Item href="/summary/gvc/cummulative">
							Acumulado
						</NavDropdown.Item>
						<NavDropdown.Item href="/summary/gvc/today">Hoy</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title="Últimos días">
						<NavDropdown.Item href="/lastDays/myCountry">
							Colombia
						</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href="#about">Acerca de</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavigationBarBS;
