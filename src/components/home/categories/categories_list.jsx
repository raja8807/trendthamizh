import Link from "next/link";
import CategoryCard from "./category/category";

import styles from "./categories_list.module.scss";
const { Row, Col } = require("react-bootstrap");

import CATEGORIES from "@/helpers/categories/categories";

const CategoriesList = () => {
  return (
    <>
      <h1 className={styles.head}>Categories</h1>
      <hr />
      <Row xs={2} md={3} className="g-4">
        {CATEGORIES.map((category) => {
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
