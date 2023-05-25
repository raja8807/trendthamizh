import { Col, Container, Row } from "react-bootstrap";
import styles from "./footer.module.scss";
import Link from "next/link";
import Logo from "../logo/logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row sm={12}>
          <Col className={styles.centered_row}>
            <Logo/>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm={6} md={4}>
            <h4>Links</h4>
            <ul>
              <li>
                <Row>
                  <Link href="#">Home</Link>
                </Row>
              </li>
              <li>
                <Row>
                  <Link href="#">About</Link>
                </Row>
              </li>
              <li>
                <Row>
                  <Link href="#">Contact Us</Link>
                </Row>
              </li>
            </ul>
          </Col>
          <Col sm={6} md={4}>
            <h4>Browse Category</h4>
            <ul>
              <li>
                <Row>
                  <Link href="#">News</Link>
                </Row>
              </li>
              <li>
                <Row>
                  <Link href="#">Cinema</Link>
                </Row>
              </li>
              <li>
                <Row>
                  <Link href="#">Cricket</Link>
                </Row>
              </li>
              <li>
                <Row>
                  <Link href="#">Trending</Link>
                </Row>
              </li>
              <li>
                <Row>
                  <Link href="#">Random</Link>
                </Row>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h4>Social Links</h4>
            <ul>
              <li>
                <Row>
                  <Link href="#">Facebook</Link>
                </Row>
              </li>
              <li>
                <Row>
                  <Link href="#">Instagram</Link>
                </Row>
              </li>
              <li>
                <Row>
                  <Link href="#">Youtube</Link>
                </Row>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className={styles.centered_row}>
            <span>&copy; TrenThamizh 2023</span>
            <span>|</span>
            <Link href="#">Termms and Service</Link>
            <span>|</span>
            <Link href="#">Privacy Policy</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
