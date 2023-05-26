const { Card } = require("react-bootstrap");

import styles from "./small_card.module.scss";

const SmallCard = () => {
  return (
    <Card className={styles.small_card}>
      <Card.Img src="/images/categories/cricket.jpg" height={50} width={50} />
      <Card.Title className={styles.small_card_title}>
        hello tgsiii aisihaio da caifhosahfo aoihaofos hdovsodbvodvo hello
        tgsiii aisihaio da caifhosahfo aoihaofos hdovsodbvodvo
      </Card.Title>
    </Card>
  );
};

export default SmallCard;
