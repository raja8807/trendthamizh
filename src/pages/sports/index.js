import ArticleList from "@/components/articles/article-list/article-list";
import Layout from "@/components/layout/layout";
import PageHeading from "@/components/ui/page-heading/page_heading";

const Sports = () => {
  return (
    <Layout>
      <PageHeading heading="Sports" />
      <ArticleList query="category=sports" />
    </Layout>
  );
};

export default Sports;
