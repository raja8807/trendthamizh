import { Col, Container, Row } from "react-bootstrap";
import Home from "../home/home";
import CustomBreadcrumbs from "./breadcrumb/breadcrumb";
import Header from "./header/header";
import styles from "./layout.module.scss";
import SideBar from "./side-bar/side_bar";
import Head from "next/head";
import Footer from "./footer/footer";
import { useState } from "react";
// import Home from "../home/home"

const Layout = ({ children,categoryName,tags }) => {

  
  return (
    <>
      <Head>
        <title>TrenThamizh</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav-icon.ico" />
      </Head>
      <div className={styles.layout}>
        <Header />
        <Container>
     
          <br />

          {/* <CustomBreadcrumbs /> */}
          <div className={styles.body}>
            <Row>
              <Col sm={12} xl={8}>
                <Container>{children}</Container>
                <br />
              </Col>
              <Col sm={12} xl={4}>
                <SideBar categoryName={categoryName} tags={tags}/>
              </Col>
            </Row>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
