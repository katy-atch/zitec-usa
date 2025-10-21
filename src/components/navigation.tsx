import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router';

export const Navigation = () => (
  <Navbar expand="sm" className="bg-body-tertiary px-3 py-0">
    <Navbar.Brand as={Link} to="/zitec-usa" className="mx-3">
      <img
        src="zitec-logo.png"
        width="70"
        height="70"
        alt="ZITEC USA Logo"
        className="mx-2 my-0"
      />
      ZITEC USA
    </Navbar.Brand>

    <div className="flex-grow-1 flex-fill"></div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse
      id="basic-navbar-nav"
      className="me-auto justify-content-evenly"
    >
      <Nav.Link as={Link} to="/zitec-usa/about">
        About Us
      </Nav.Link>
      <NavDropdown title="Products" id="products-dropdown">
        <NavDropdown.Item as={Link} to="/zitec-usa/products/20mm-gun-stand">
          20MM Gun Maintenance Stand
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/zitec-usa/products/f-35-storage-system">
          F-35 AME Storage and Mobility System
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/zitec-usa/products/molt">
          Manually Operated Lift Truck (MOLT)
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/zitec-usa/products/munitions-table">
          Munitions Maintenance and Inspection Table
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link as={Link} to="/zitec-usa/contact">
        Contact Us
      </Nav.Link>
    </Navbar.Collapse>
  </Navbar>
);
