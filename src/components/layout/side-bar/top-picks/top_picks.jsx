import SmallCard from "@/components/ui/cards/small-card.jsx/small_card";
import styles from "./top_picks.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import TopPicksSkeleton from "./skeleton";

const TopPicks = (props) => {
  const { categoryName } = props;

  const [topPicks, setTopPicks] = useState([]);
  const [isLodaing, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getTopPicks = async () => {
      const res = await axios.get(`/api/toppicks?category=${categoryName}`);
      setTopPicks(res?.data || []);
      setIsLoading(false);
    };

    getTopPicks();
  }, [categoryName]);

  return (
    <>
      <h3>Top Picks</h3>
      <div className={styles.carousel}>
        {isLodaing && <TopPicksSkeleton count={3} />}
        {topPicks[0] &&
          topPicks.map((topPick) => {
            return <SmallCard key={topPick.id} data={topPick} />;
          })}
      </div>
    </>
  );
};

export default TopPicks;
