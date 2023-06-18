const { Card } = require("react-bootstrap");

import styles from "./small_card.module.scss";

const SmallCard = (props) => {
  const { data } = props;
  return (
    <Card className={styles.small_card}>
      <Card.Img src={data?.bannerImage?.src} height={50} width={50} />
      <Card.Title className={styles.small_card_title}>
        {data?.heading}
      </Card.Title>
    </Card>
  );
};

export default SmallCard;
