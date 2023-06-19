import axios from "axios";
import { useEffect, useState } from "react";
import LatestSkeleton from "./skeleton";

const {
  default: ThumbCard,
} = require("@/components/ui/cards/thumb-card/thumb_card");

const Latest = (props) => {
  const { categoryName } = props;

  const [tagArticles, setTagArticles] = useState([]);
  const [isLodaing, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getTopPicks = async () => {
      const res = await axios.get(`/api/latest?category=${categoryName}`);
      setTagArticles(res?.data || []);
      setIsLoading(false);
    };

    getTopPicks();
  }, [categoryName]);

  return (
    <>
      <h3>Latest</h3>
      {isLodaing && <LatestSkeleton count={3} />}

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

export default Latest;
