import Layout from "@/components/layout/layout";

import Article from "@/components/articles/article-list/article/atricle";
import axios from "axios";
import { useEffect, useState } from "react";

const ArticleByTitle = (props) => {
  const { title, articleData } = props;

  const [article, setArticle] = useState([]);

  useEffect(() => {
    setArticle(articleData);
  }, [articleData]);

  return (
    <Layout>
      <Article title={title} article={article} />
    </Layout>
  );
};

export default ArticleByTitle;

export async function getServerSideProps(context) {
  const articleTitle = context.query.title;
  const fetchUrl = `http://${context.req.headers.host}/api/article/${articleTitle}`;

  const res = await axios.get(fetchUrl);

  return {
    props: {
      articleData: res.data,
      title:articleTitle
    },
  };
}
