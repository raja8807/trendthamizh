// import Container from 'react-bootstrap/Container';
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

import styles from "./header.module.scss";
import Logo from "../logo/logo";
import Link from "next/link";
import { useRouter } from "next/router";
import CATEGORIES from "@/helpers/categories/categories";

const headerItems = [
  {
    name: "Home",
    type: "link",
    href: "",
  },
  {
    name: "Categories",
    type: "dropdown",
    items: CATEGORIES.map((cat) => ({
      name: cat.categoryName,
      type: "link",
      href: cat.id,
    })),
  },
  {
    name: "About",
    type: "link",
    href: "about",
  },
  {
    name: "Contact us",
    type: "link",
    href: "contact",
  },
];

const Header = () => {
  const router = useRouter();
  const paths = router.pathname?.split("/");

  return (
    <Navbar
      className={styles.header}
      variant="dark"
      expand="lg"
      collapseOnSelect
      sticky="top"
    >
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <Logo />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-navbar`} />
        <Navbar.Offcanvas
          className={styles.offcanvas}
          id={`offcanvasNavbar-expand-navbar`}
          aria-labelledby={`offcanvasNavbarLabel-expand-navbar`}
          placement="end"
        >
          <Offcanvas.Header closeButton className={styles.offcanvas}>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-navbar`}>
              <Navbar.Brand>
                <Link href="/">
                  <Logo />
                </Link>
              </Navbar.Brand>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {headerItems.map((item) => {
                return item.type === "link" ? (
                  <Navbar.Text
                    key={item.name}
                    className={
                      paths?.includes(item?.href)
                        ? styles?.active
                        : styles?.inactive
                    }
                  >
                    <Link href={"/" + item?.href}>{item.name}</Link>
                    &nbsp; &nbsp; &nbsp;
                  </Navbar.Text>
                ) : (
                  <>
                    <NavDropdown
                      title={item.name}
                      id={`offcanvasNavbarDropdown-expand-navbar`}
                    >
                      {item.items.map((item) => {
                        return (
                          <Navbar.Text
                            key={item.name}
                            className={
                              paths?.includes(item?.href)
                                ? styles?.active
                                : styles?.inactive
                            }
                          >
                            <Link href={"/category/" + item?.href}>
                              {item.name}
                            </Link>
                          </Navbar.Text>
                        );
                      })}
                    </NavDropdown>
                    &nbsp; &nbsp; &nbsp;
                  </>
                );
              })}
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
            &nbsp; &nbsp; &nbsp;
            <br />
            <Navbar.Text className={styles.inactive}>
              <Link href={"/admin-panel"}>Admin</Link>
            </Navbar.Text>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
