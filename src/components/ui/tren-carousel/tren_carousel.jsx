// import Image from "next/image";
import Image from "react-bootstrap/Image";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./tren_carousel.module.scss";
import Link from "next/link";

function TrenCarousel(props) {
  const { data = [] } = props;

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((image) => {
        return (
          <Carousel.Item key={image.id}>
            {image.link ? (
              <Link href={image.link} target="_blank">
                <Image src={image.imgSrc} fill alt={image.label} fluid />
                <Carousel.Caption>
                  <h3>{image.label}</h3>
                  <p>{image.description}</p>
                </Carousel.Caption>
              </Link>
            ) : (
              <>
                <Image src={image.imgSrc} fill alt={image.label} fluid />

                <Carousel.Caption>
                  <h3>{image.label}</h3>
                  <p>{image.description}</p>
                </Carousel.Caption>
              </>
            )}
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default TrenCarousel;
