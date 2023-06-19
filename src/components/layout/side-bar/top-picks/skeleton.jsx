import SmallCard from "@/components/ui/cards/small-card.jsx/small_card";

const TopPicksSkeleton = (props) => {
  const { count } = props;

  return [...Array(count).keys()].map((_, i) => (
    <SmallCard key={i} isLoading />
  ));
};

export default TopPicksSkeleton;
