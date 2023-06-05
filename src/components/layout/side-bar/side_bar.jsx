const { Row, Col, Carousel } = require("react-bootstrap");
import Image from "next/image";
import styles from "./side_bar.module.scss";
import ThumbCard from "@/components/ui/cards/thumb-card/thumb_card";
import cricketArticleListData from "../../../temp_data/cricket.json";
import SmallCard from "@/components/ui/cards/small-card.jsx/small_card";
const SideBar = () => {
  return (
    <>
      <Row className={styles.side_bar}>
        <Row>
          <h3>Top Picks</h3>
        </Row>
        <Row>
          <div className={styles.carousel}>
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </div>
        </Row>

        <Row>
          <h3>Related</h3>
        </Row>
        <Row>
          {cricketArticleListData?.map((article) => {
            return <ThumbCard key={article?._id} thumbData={article} />;
          })}
        </Row>
      </Row>
    </>
  );
};

export default SideBar;
