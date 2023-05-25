const { Row, Col } = require("react-bootstrap");
import Image from "next/image";
import styles from "./side_bar.module.scss";
import ThumbCard from "@/components/ui/cards/thumb-card/thumb_card";
const SideBar = () => {
  return (
    <>
      <Row>
        <h3>Top Picks</h3>
      </Row>
      <Row className={styles.side_bar}>
        <ThumbCard />
        <ThumbCard />
        <ThumbCard />
        <ThumbCard />
        <ThumbCard />
        <ThumbCard />
        <ThumbCard />
        <ThumbCard />
        <ThumbCard />
      </Row>
    </>
  );
};

export default SideBar;
