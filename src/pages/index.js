import Layout from "@/components/layout/layout";
import Home from "@/components/home/home";
import AdBanner from "@/components/ad-banner/ad_banner";
import ArticleList from "@/components/articles/article-list/article-list";
import { useEffect, useState } from "react";
import axios from "axios";
import PageHeading from "@/components/ui/page-heading/page_heading";

export default function HomePage(props) {
  const { articlesData = [] } = props;

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    setArticles(articlesData);
  }, [articlesData]);

  return (
    <>
      <Layout categoryName={"home"}>
        <AdBanner />
        <br />
        <Home />
        <br />
        <PageHeading heading="Browse" />
        <ArticleList articles={articles} />
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const fetchUrl = `http://${context.req.headers.host}/api/toppicks?category=home`;
  let res;
  try {
    res = await axios.get(fetchUrl);
  } catch {
    res = { data: [] };
  }

  return {
    props: {
      articlesData: res.data,
    },
  };
}
