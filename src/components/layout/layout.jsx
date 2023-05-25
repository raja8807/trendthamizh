import { Col, Container, Row } from "react-bootstrap";
import Home from "../home/home";
import CustomBreadcrumbs from "./breadcrumb/breadcrumb";
import Header from "./header/header";
import styles from "./layout.module.scss";
import SideBar from "./side-bar/side_bar";
import Head from "next/head";
// import Home from "../home/home"

const Layout = ({ children }) => {
  return (
   <>
    <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className={styles.layout}>
      <Header />
      <Container>
            <br/>
          <CustomBreadcrumbs />
        <div className={styles.body}>
        <br/>
         <Row>
            <Col sm={12} xl={9}>
            {children}
            <br/>
            </Col>
            <Col sm={12} xl={3}>
            <SideBar/>
            </Col>
         </Row>
        </div>
      </Container>
    </div>
   </>
  );
};

export default Layout;