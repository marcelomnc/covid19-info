import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../../assets/images/AppLogo.svg";
import * as Labels from "../../../shared/ui/Labels";

const NavBar = (props) => {
	return (
		<Navbar className="NavBar" variant="dark" expand="lg">
			<Navbar.Brand className="NavBar__brand">
				<img
					alt=""
					src={logo}
					width="30"
					height="30"
					className="NavBar__brand__logo d-inline-block align-top"
				/>
				{" " + Labels.appLabel}
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
				<Nav className="Nav">
					<NavDropdown title={Labels.summaryLabel}>
						<NavDropdown.Item eventKey="1.1" href="/summary/global">
							{Labels.globalLabel}
						</NavDropdown.Item>
						<NavDropdown.Item eventKey="1.2" href="/summary/country">
							{Labels.colombiaLabel}
						</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title={Labels.globalVsColombiaLabel}>
						<NavDropdown.Item eventKey="2.1" href="/gvc/cumulative">
							{Labels.cumulativeLabel}
						</NavDropdown.Item>
						<NavDropdown.Item eventKey="2.2" href="/gvc/newCases">
							{Labels.newCasesLabel}
						</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title={Labels.lastDaysColombiaLabel}>
						<NavDropdown.Item eventKey="3.1" href="/lastDays/cumulative">
							{Labels.cumulativeLabel}
						</NavDropdown.Item>
						<NavDropdown.Item eventKey="3.2" href="/lastDays/newCases">
							{Labels.newCasesLabel}
						</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link eventKey="4" href="/about">
						{Labels.aboutLabel}
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
