import axios from "axios";
import { useEffect, useState } from "react";

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
      const res = await axios.get(`/api/tags`);
      setTagArticles(res?.data || []);
      setIsLoading(false);
    };

    getTopPicks();
  }, [tags]);

  //   console.log(tagPosts);

  return (
    <>
      <h3>Related</h3>
      {isLodaing && <p>Loading...</p>}
      {tagArticles.map((article) => {
        return (
          <>
            <ThumbCard key={article.id} thumbData={article} />
          </>
        );
      })}
    </>
  );
};

export default Related;
