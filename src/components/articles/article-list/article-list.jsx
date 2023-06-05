import ArticlePreviewCard from "./article-card/article_card";

// import cricketArticlesList from "../../../temp_data/cricket.json";
import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";

const ArticleList = (props) => {
  const { query } = props;

  const [articlesData, setArticlesData] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(null);
    axios
      .get(`/api/articles?${query}`)
      .then((res) => setArticlesData(res?.data))
      .then(() => {
        setIsSuccess(true);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(JSON.stringify(err));
        setIsLoading(false);
      });
  }, [query]);

  return (
    <div>
      {isError && <p>{isError}</p>}

      {isLoading && <p>loading..........</p>}
      <Row>
        {isSuccess &&
          articlesData?.length > 0 &&
          articlesData.map((article) => {
            return (
              <Col key={article._id} xs={12} sm={12} md={12} lg={6} xl={12} xxl={6}>
                <ArticlePreviewCard articlePreview={article} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default ArticleList;

// export async function getServerSideProps(context) {
//   console.log(context);
//   // Fetch data from external API
//   const res = await fetch(`/api/articles`);
//   console.log(res);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }
