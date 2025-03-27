import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router';

export const Navigation = () => (
  <Navbar expand="sm" className="bg-body-tertiary px-3">
    <Navbar.Brand as={Link} to="/" className="mx-3">
      <img
        src="/src/assets/zitec-logo-only.png"
        width="75"
        height="75"
        alt="Zitec USA Logo"
        className="mx-2"
      />
      ZITEC USA
    </Navbar.Brand>

    <div className="flex-grow-1 flex-fill"></div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse
      id="basic-navbar-nav"
      className="me-auto justify-content-evenly"
    >
      <Nav.Link as={Link} to="/about">
        About Us
      </Nav.Link>
      <Nav.Link as={Link} to="/contact">
        Our Products
      </Nav.Link>
      <Nav.Link as={Link} to="/contact">
        Contact Us
      </Nav.Link>
    </Navbar.Collapse>
  </Navbar>
);
