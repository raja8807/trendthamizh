import Layout from "@/components/layout/layout";

import Article from "@/components/articles/article-list/article/atricle";



const ArticleByTitle = (props) => {
  const { title } = props;

  // const articleData = cricketArticlesList.find(
  //   (article) => article?.title === title
  // );

  return (
    <Layout>
      <Article title={title} />
    </Layout>
  );
};

export default ArticleByTitle;

export function getServerSideProps(context) {
  return {
    props: { title: context.query.title },
  };
}
