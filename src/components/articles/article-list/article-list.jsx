import ArticlePreviewCard from "./article-card/article_card";
import { Col, Row } from "react-bootstrap";

const ArticleList = (props) => {
  const { articles } = props;

  return (
    <div>
      {
        articles?.length === 0 && <p>No Articles found</p>
      }
      <Row>
        {articles?.length > 0 &&
          articles.map((article) => {
            return (
              <Col key={article._id} xs={12} lg={6} xl={12} xxl={6}>
                <ArticlePreviewCard articlePreview={article} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default ArticleList;
