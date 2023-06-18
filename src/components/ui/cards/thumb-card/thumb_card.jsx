const { default: Image } = require("next/image");
const { Row, Col } = require("react-bootstrap");
import Link from "next/link";
import styles from "./thumb_card.module.scss";

import { Card } from "react-bootstrap";

const ThumbCard = (props) => {
  const { thumbData } = props;

  return (
    <Link href={`/article/${thumbData.title}`}>
      <Row className={styles.thumb_card}>
        <Col xs={4}>
          {/* <img src={thumbData?.bannerImage?.src} alt="xx"/> */}
          <Card.Img
            src={thumbData?.bannerImage?.src}
            // height={100}
            // width={100}
            alt={thumbData?.bannerImage?.name}
          />
        </Col>
        <Col xs={8}>
          <p className={styles.heading}>
            {thumbData?.heading}
            <small>...Read More</small>
          </p>
        </Col>
      </Row>
    </Link>
  );
};

export default ThumbCard;
