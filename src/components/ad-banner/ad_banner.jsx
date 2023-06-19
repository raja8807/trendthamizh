const { default: TrenCarousel } = require("../ui/tren-carousel/tren_carousel");

const AdBanner = () => {
  const adsData = [
    {
      id: "1",
      label: "Label",
      description: "descriptipn dadisd jsprog msorgjspjg.",
      imgSrc: "/images/banner/2.jpg",
    },
    {
      id: "2",
      imgSrc: "/images/banner/2.jpg",
      link: "/contact",
    },
    {
      id: "3",
      imgSrc: "/images/banner/2.jpg",
      link: "/contact",
    },
  ];

  return <TrenCarousel data={adsData} />;
};

export default AdBanner;
