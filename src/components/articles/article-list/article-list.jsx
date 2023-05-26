import ArticlePreviewCard from "./article-card/article_card";

import cricketArticlesList from "../../../temp_data/cricket.json";

const ArticleList = () => {
  
  const cricketArticlesPreviewsListData = [...cricketArticlesList];

  return (
    <div>
      {
        cricketArticlesPreviewsListData.map((article)=>{
           return <ArticlePreviewCard key={article.id} articlePreview={article}/>
        })
      }
    </div>
  );
};

export default ArticleList;
