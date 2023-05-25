const { default: Image } = require("next/image");
const { Row, Col } = require("react-bootstrap");
import Link from "next/link";
import styles from "./thumb_card.module.scss";

const ThumbCard = () => {
  return (
    <Link href="/cricket/1235">
      <Row className={styles.thumb_card}>
        <Col sm={4}>
          <Image
            src="/images/categories/cricket.jpg"
            height={100}
            width={100}
            alt="xxx"
          />
        </Col>
        <Col sm={8}>
          <p>இந்த வருடம் ஓய்வு இல்லை.. ஆனால்.. கேப்டன் மாற்றம்? இதுதான் சிஎஸ்கே
          தோனியின் பிளான்? கேப்டன் அவரா?<small>...Read More</small></p>
          
        </Col>
      </Row>
    </Link>
  );
};

export default ThumbCard;
