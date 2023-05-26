import Layout from "@/components/layout/layout";

import Article from "@/components/articles/article-list/article/atricle";

import cricketArticlesList from "../../temp_data/cricket.json";
import { useRouter } from "next/router";

const CricketNews = () => {
  const router = useRouter();
  const { id } = router.query;

  const articleData = cricketArticlesList.find((article) => article?.id === id);

  return (
    <Layout>
      <Article articleData={articleData} />
    </Layout>
  );
};

export default CricketNews;
