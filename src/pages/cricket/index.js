import ArticleList from "@/components/articles/article-list/article-list";
import Layout from "@/components/layout/layout";
import PageHeading from "@/components/ui/page-heading/page_heading";


const Cricket = () => {
  return (
    <Layout>
        <PageHeading heading='Cricket'/>
      <ArticleList />
    </Layout>
  );
};

export default Cricket;
