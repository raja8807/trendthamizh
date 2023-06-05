import ArticleList from "@/components/articles/article-list/article-list";
import Layout from "@/components/layout/layout";
import PageHeading from "@/components/ui/page-heading/page_heading";

const News = () => {
  return (
    <Layout>
      <PageHeading heading="News" />
      <ArticleList query="category=news" />
    </Layout>
  );
};

export default News;
