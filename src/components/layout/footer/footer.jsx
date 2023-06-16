import { Col, Container, Row } from "react-bootstrap";
import styles from "./footer.module.scss";
import Link from "next/link";
import Logo from "../logo/logo";
import CATEGORIES from "@/helpers/categories/categories";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row xs={12}>
          <Col className={styles.centered_row}>
            <Logo />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={6} md={4}>
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
          <Col xs={6} md={4}>
            <h4>Browse By Category</h4>
            <ul>
              {CATEGORIES.map((cat) => {
                return <li key={cat.id}>
                  <Row>
                    <Link href={`/category/${cat.id}`}>{cat.categoryName}</Link>
                  </Row>
                </li>;
              })}
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
            <Link href="/privacy-policy">Privacy Policy</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
