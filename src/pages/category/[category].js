import ArticleList from "@/components/articles/article-list/article-list";
import Layout from "@/components/layout/layout";
import PageHeading from "@/components/ui/page-heading/page_heading";
import axios from "axios";
import { useEffect, useState } from "react";
import CATEGORIES from "@/helpers/categories/categories";
import CategoriesList from "@/components/home/categories/categories_list";
import AdBanner from "@/components/ad-banner/ad_banner";

const CategoryScreen = (props) => {
  const { articlesData, categoryName, isValidCategoryName } = props;

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    setArticles(articlesData);
  }, [articlesData]);
  const heading = `${categoryName[0].toUpperCase()}${categoryName.slice(1)}`;

  const tags = articles
    ?.slice(0, 10)
    .map((article) => article.tags)
    ?.flat(1)
    .slice(0, 10);

  return (
    <>
      {isValidCategoryName ? (
        <Layout categoryName={categoryName} tags={tags}>
          <>
            <AdBanner />
            <br />
            <PageHeading heading={heading} />
            <ArticleList articles={articles} />
          </>
        </Layout>
      ) : (
        <Layout categoryName="home">
          <p style={{ textAlign: "center" }}>Category Not Found</p>
          <br />
          <CategoriesList />
        </Layout>
      )}
    </>
  );
};

export default CategoryScreen;

export async function getServerSideProps(context) {
  const categoryName = context.query.category;
  const fetchUrl = `http://${context.req.headers.host}/api/articles?category=${categoryName}`;

  const isValidCategoryName = CATEGORIES.map((cat) => cat.id).includes(
    categoryName
  );

  let res = { data: [] };

  if (isValidCategoryName) {
    res = await axios.get(fetchUrl);
  }

  return {
    props: {
      articlesData: res.data,
      categoryName,
      isValidCategoryName,
    },
  };
}
