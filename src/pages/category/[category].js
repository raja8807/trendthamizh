import ArticleList from "@/components/articles/article-list/article-list";
import Layout from "@/components/layout/layout";
import PageHeading from "@/components/ui/page-heading/page_heading";
import axios from "axios";
import { useEffect, useState } from "react";

const Sports = (props) => {
  const { articlesData, categoryName } = props;

  const [articles, setArticles] = useState([]);
  const heading = `${categoryName[0].toUpperCase()}${categoryName.slice(1)}`;

  useEffect(() => {
    setArticles(articlesData);
  }, [articlesData]);

  return (
    <Layout categoryName={categoryName} >
      <PageHeading heading={heading} />
      <ArticleList query="category=sports" articles={articles} />
    </Layout>
  );
};

export default Sports;

export async function getServerSideProps(context) {
  const categoryName = context.query.category;
  const fetchUrl = `http://${context.req.headers.host}/api/articles?category=${categoryName}`;

  const res = await axios.get(fetchUrl);

  return {
    props: {
      articlesData: res.data,
      categoryName,
    },
  };
}
