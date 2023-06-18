const { Row, Col, Carousel } = require("react-bootstrap");
import styles from "./side_bar.module.scss";
import ThumbCard from "@/components/ui/cards/thumb-card/thumb_card";
import cricketArticleListData from "../../../temp_data/cricket.json";
import TopPicks from "./top-picks/top_picks";
import Related from "./related/related";
import { useState } from "react";
const SideBar = (props) => {
  const { categoryName,tags=[] } = props;


  return (
    <>
      <Row className={styles.side_bar}>
        <Row>
         
          <TopPicks categoryName={categoryName} />
        </Row>

        {categoryName !== "home" && (
          <Row>
            <Related tags={tags} />
          </Row>
        )}
      </Row>
    </>
  );
};

export default SideBar;
