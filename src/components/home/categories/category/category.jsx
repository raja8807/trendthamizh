import Link from "next/link";
import { Card } from "react-bootstrap";
import styles from "./category.module.scss";
import Image from "next/image";

const CategoryCard = (props) => {
  const { category } = props;
  const { id,title,categoryName } = category;

  return (
    <Card className={styles.category_card}>
      <Link href={`/category/${id}`}>
        {/* <div className={styles.img_area}>
          <Image alt='catgeogory' variant="top" fill src={`/images/categories/${id}.jpg`} />
          <div className={styles.img_overlay}>
            <h1>{categoryName}</h1>
          </div>
        </div> */}
        <Card.Body>
          <Card.Title className={styles.card_title}>{categoryName}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default CategoryCard;
