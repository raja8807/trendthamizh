const { default: Image } = require("next/image");
const { Row, Col } = require("react-bootstrap");
import Link from "next/link";
import styles from "./thumb_card.module.scss";

const ThumbCard = (props) => {
  const { thumbData } = props;

  // const thumbData = {
  //   id: "123456",
  //   category: "cricket",
  //   bannerImage: {
  //     name: "Creicket Image",
  //     src: "/images/categories/cricket.jpg",
  //   },
  //   heading:
  //     "இந்த வருடம் ஓய்வு இல்லை.. ஆனால்.. கேப்டன் மாற்றம்? இதுதான் சிஎஸ்கே தோனியின் பிளான்? கேப்டன் அவரா?",
  // };

  return (
    <Link 
    // href={`/article?category=${thumbData?.category}&id=${thumbData?.id}`}
    href={`/article/${thumbData.title}`}
    
    >
      <Row className={styles.thumb_card}>
        <Col xs={4}>
          <Image
            src={thumbData?.bannerImage?.src}
            height={100}
            width={100}
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
