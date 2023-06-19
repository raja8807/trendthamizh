const { Card } = require("react-bootstrap");

import Link from "next/link";
import styles from "./small_card.module.scss";
import TrenSkeleton from "../../skeleton/skeleton";

const SmallCard = (props) => {
  const { data, isLoading } = props;
  return (
    

    isLoading ? (
      <Card className={styles.small_card}>
        <TrenSkeleton height={150} />
        <TrenSkeleton height={50} />
      </Card>
    ) : (
      <Link href={`/article/${data.title}`}>
        <Card className={styles.small_card}>
          <Card.Img src={data?.bannerImage?.src} height={50} width={50} />
          <Card.Title className={styles.small_card_title}>
            {data?.heading}
          </Card.Title>
          <Card.Text>{data?.viewsCount}</Card.Text>
        </Card>
      </Link>
    )
  );
};

export default SmallCard;
