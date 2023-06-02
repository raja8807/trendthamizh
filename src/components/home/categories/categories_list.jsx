import Link from "next/link";
import CategoryCard from "./category/category";

import styles from './categories_list.module.scss'
const { Row, Col, Card } = require("react-bootstrap");

const categories = [
 
  {
    id: "news",
    title: "News",
   
  },
  {
    id: "cinema",
    title: "Cinema",
   
  },
  {
    id: "sports",
    title: "Sports",

  },
  {
    id: "trending",
    title: "Trending",
   
  },
  {
    id: "random",
    title: "Random",
  
  },
];

const CategoriesList = () => {
  return (
    <>
      <h1 className={styles.head}>Categories</h1>
      <hr/>
      <Row xs={2} md={3}  className="g-4">
        {categories.map((category) => {
          return (
            <Col key={category.id}>
              <CategoryCard category={category} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default CategoriesList;
