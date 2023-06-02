import Layout from "@/components/layout/layout";

import Article from "@/components/articles/article-list/article/atricle";

import cricketArticlesList from "../../temp_data/cricket.json";
import { useRouter } from "next/router";

const ArticleByTitle = () => {
  const router = useRouter();
  const { title } = router.query;

  const articleData = cricketArticlesList.find(
    (article) => article?.title === title
  );

  return (
    <Layout>
      <Article articleData={articleData} />
    </Layout>
  );
};

export default ArticleByTitle;
