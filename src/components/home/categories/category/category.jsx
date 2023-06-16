import Link from "next/link";
import { Card } from "react-bootstrap";
import styles from "./category.module.scss";

const CategoryCard = (props) => {
  const { category } = props;
  const { id,title } = category;

  return (
    <Card className={styles.category_card}>
      <Link href={`/category/${id}`}>
        <div className={styles.img_area}>
          <Card.Img variant="top" src={`/images/categories/${id}.jpg`} />
          <div className={styles.img_overlay}>
            <h1>{title}</h1>
          </div>
        </div>
        <Card.Body>
          <Card.Title className={styles.card_title}>{title}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default CategoryCard;
