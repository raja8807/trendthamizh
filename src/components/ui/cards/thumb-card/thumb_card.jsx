const { default: Image } = require("next/image");
const { Row, Col } = require("react-bootstrap");
import Link from "next/link";
import styles from "./thumb_card.module.scss";

import { Card } from "react-bootstrap";
import TrenSkeleton from "../../skeleton/skeleton";

const ThumbCard = (props) => {
  const { thumbData, isLoading } = props;

  return isLoading ? (
    <Row className={styles.thumb_card}>
      <Col xs={4}>
        <TrenSkeleton height={100} />
      </Col>

      <Col xs={8}>
        <TrenSkeleton height={40} customStyle={{ marginBottom: "10px" }} />
        <TrenSkeleton height={20} />
        <TrenSkeleton height={20} />
      </Col>
    </Row>
  ) : (
    <Link href={`/article/${thumbData?.title}`}>
      <Row className={styles.thumb_card}>
        <Col xs={4}>
          <Card.Img
            src={thumbData?.bannerImage?.src}
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
