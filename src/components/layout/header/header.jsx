// import Container from 'react-bootstrap/Container';
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Row,
} from "react-bootstrap";

import styles from "./header.module.scss";

const Header = () => {
  return (
   <>
    <Navbar className={styles.header} variant="dark" expand="lg" collapseOnSelect sticky="top">
      <Container>
        <Navbar.Brand href="#home" className={styles.logo}>
          <h2>
            Tren<span>Thamizh</span>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-navbar`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-navbar`}
          aria-labelledby={`offcanvasNavbarLabel-expand-navbar`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-navbar`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/" >Home</Nav.Link>
             
              <NavDropdown
                title="Categories"
                id={`offcanvasNavbarDropdown-expand-navbar`}
              >
                <NavDropdown.Item href="#action3">News</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Cinema
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="#action5">
                  Cricket
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Trending
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Random
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2">About Us</Nav.Link>
              <Nav.Link href="#actionx">Contact Us</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
   </>
  );
};

export default Header;
