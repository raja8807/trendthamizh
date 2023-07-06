import axios from "axios";
import { useEffect, useState } from "react";
import RelatedSkeleton from "./skeleton";

const {
  default: ThumbCard,
} = require("@/components/ui/cards/thumb-card/thumb_card");

const Related = (props) => {
  const { tags } = props;

  const [tagArticles, setTagArticles] = useState([]);
  const [isLodaing, setIsLoading] = useState(false);

  

  useEffect(() => {
    setIsLoading(true);
    const getTopPicks = async () => {
      const res = await axios.get(`/api/tags?tags=${tags.join(',')}`);
      setTagArticles(res?.data || []);
      setIsLoading(false);
    };

    getTopPicks();
  }, [tags]);

  //   console.log(tagPosts);

  return (
    <>
      <h3>Related</h3>
      {isLodaing && <RelatedSkeleton count={3} />}
      {tagArticles.map((article) => {
        return (
          
            <ThumbCard key={article.id} thumbData={article} />
          
        );
      })}
    </>
  );
};

export default Related;
