// const { default: Image } = require("next/image");
const { Row, Col, Image, Figure, Badge } = require("react-bootstrap");
import Link from "next/link";
import styles from "./article.module.scss";

const Article = () => {
  const articleData = {
    id: "i3r709r323ubiebfi",
    heading:
      "இந்த வருடம் ஓய்வு இல்லை.. ஆனால்.. கேப்டன் மாற்றம்? இதுதான் சிஎஸ்கே தோனியின் பிளான்? கேப்டன் அவரா?",
    createdBy: "Raja",
    createdAt: new Date(),
    category: "cricket",
    images: [
      {
        src: "https://assets.bcci.tv/bcci/photos/1043/842dee7a-f6b7-4e80-83ff-4fbdfe44eb11.jpg",
        source: "iplt20.com",
      },
      {
        src: "https://assets.bcci.tv/bcci/photos/1043/688d01fe-9efb-46ee-b346-41c954812a9a.jpg",
        source: "iplt20.com",
      },
      {
        src: "https://assets.bcci.tv/bcci/photos/1043/5cd49266-d531-411b-999a-0c0d0199d949.jpg",
        source: "iplt20.com",
      },
    ],
    paragraphs: [
      "இந்த நிலையில்தான் *தோனி* ஐபிஎல் தொடரில் இருந்து ஓய்வு பெற *போவதாக* பேச்சுக்கள் சுற்றி வரும் நிலையில்தான் சிஎஸ்கேவின் அடுத்த கேப்டன் யார் என்பது தொடர்பான ஆலோசனைகள், விவாதங்கள் எழுந்துள்ளன. இந்த நிலையில்தான் தோனி ஐபிஎல் தொடரில் இருந்து ஓய்வு பெற போவதாக பேச்சுக்கள் சுற்றி வரும் நிலையில்தான் சிஎஸ்கேவின் அடுத்த கேப்டன் யார் என்பது தொடர்பான ஆலோசனைகள், விவாதங்கள் எழுந்துள்ளன.",
      "இந்த நிலையில்தான் *தோனி* ஐபிஎல் தொடரில் இருந்து ஓய்வு பெற *போவதாக* பேச்சுக்கள் சுற்றி வரும் நிலையில்தான் சிஎஸ்கேவின் அடுத்த கேப்டன் யார் என்பது தொடர்பான ஆலோசனைகள், விவாதங்கள் எழுந்துள்ளன. இந்த நிலையில்தான் தோனி ஐபிஎல் தொடரில் இருந்து ஓய்வு பெற போவதாக பேச்சுக்கள் சுற்றி வரும் நிலையில்தான் சிஎஸ்கேவின் அடுத்த கேப்டன் யார் என்பது தொடர்பான ஆலோசனைகள், விவாதங்கள் எழுந்துள்ளன.",
      "இந்த நிலையில்தான் *தோனி* ஐபிஎல் தொடரில் இருந்து ஓய்வு பெற *போவதாக* பேச்சுக்கள் சுற்றி வரும் நிலையில்தான் சிஎஸ்கேவின் அடுத்த கேப்டன் யார் என்பது தொடர்பான ஆலோசனைகள், விவாதங்கள் எழுந்துள்ளன. இந்த நிலையில்தான் தோனி ஐபிஎல் தொடரில் இருந்து ஓய்வு பெற போவதாக பேச்சுக்கள் சுற்றி வரும் நிலையில்தான் சிஎஸ்கேவின் அடுத்த கேப்டன் யார் என்பது தொடர்பான ஆலோசனைகள், விவாதங்கள் எழுந்துள்ளன.",
      "இந்த நிலையில்தான் *தோனி* ஐபிஎல் தொடரில் இருந்து ஓய்வு பெற *போவதாக* பேச்சுக்கள் சுற்றி வரும் நிலையில்தான் சிஎஸ்கேவின் அடுத்த கேப்டன் யார் என்பது தொடர்பான ஆலோசனைகள், விவாதங்கள் எழுந்துள்ளன. இந்த நிலையில்தான் தோனி ஐபிஎல் தொடரில் இருந்து ஓய்வு பெற போவதாக பேச்சுக்கள் சுற்றி வரும் நிலையில்தான் சிஎஸ்கேவின் அடுத்த கேப்டன் யார் என்பது தொடர்பான ஆலோசனைகள், விவாதங்கள் எழுந்துள்ளன.",
      "இந்த நிலையில்தான் தோனி ஐபிஎல் தொடரில் இருந்து *ஓய்வு* பெற போவதாக பேச்சுக்கள் சுற்றி வரும் நிலையில்தான் சிஎஸ்கேவின் அடுத்த கேப்டன் யார் என்பது தொடர்பான ஆலோசனைகள், விவாதங்கள் எழுந்துள்ளன. இந்த நிலையில்தான் தோனி ஐபிஎல் தொடரில் இருந்து ஓய்வு பெற போவதாக பேச்சுக்கள் சுற்றி வரும் நிலையில்தான் சிஎஸ்கேவின் அடுத்த கேப்டன் யார் என்பது தொடர்பான ஆலோசனைகள், விவாதங்கள் எழுந்துள்ளன.",
    ],
    tags: ["ipl", "cricket", "csk", "dhoni",'2023'],
  };

  return (
    <article className={styles.article}>
      <div>
        <h1>{articleData?.heading}</h1>
        <p>
          By <b>{articleData?.createdBy}</b>
        </p>
        <small>published: {articleData?.createdAt?.toDateString()}</small>
      </div>
      <br />
      <br />
      <main>
        {articleData?.paragraphs?.length > articleData?.images?.length
          ? articleData?.paragraphs?.map((para, idx) => {
              const splittedPara = para.split("*");

              return (
                <>
                  <Row key={Math.random()}>
                    <p>
                      {splittedPara?.length === 1
                        ? para
                        : splittedPara?.map((sentence, idx) => {
                            return idx % 2 === 0 ? (
                              <span>{sentence}</span>
                            ) : (
                              <strong>{sentence}</strong>
                            );
                          })}

                      <br />
                      <br />
                    </p>
                    {articleData?.images?.[idx] && (
                      <Row>
                        <Col sm={1} />
                        <Col sm={10}>
                          <div className={styles.image_container}>
                            <Figure>
                              <Link
                                href={articleData?.images?.[idx]?.src}
                                target="_blank"
                              >
                                <Figure.Image
                                  src={articleData?.images?.[idx]?.src}
                                  alt="xx"
                                />
                              </Link>
                              <Figure.Caption>
                                Source : {articleData?.images?.[idx]?.source}
                              </Figure.Caption>
                            </Figure>
                          </div>
                        </Col>
                        <Col sm={1} />
                      </Row>
                    )}
                  </Row>
                </>
              );
            })
          : articleData?.images?.map((image, idx) => {
              const paragraph = articleData?.paragraphs?.[idx];
              let splittedPara;
              if (paragraph) {
                splittedPara = paragraph.split("*");
              }

              return (
                <>
                  <Row key={Math.random()}>
                    {paragraph && (
                      <p>
                        {splittedPara?.length === 1
                          ? paragraph
                          : splittedPara?.map((sentence, idx) => {
                              return idx % 2 === 0 ? (
                                <span>{sentence}</span>
                              ) : (
                                <strong>{sentence}</strong>
                              );
                            })}

                        <br />
                        <br />
                      </p>
                    )}
                    {
                      <Row>
                        <Col sm={1} />
                        <Col sm={10}>
                          <div className={styles.image_container}>
                            <Figure>
                              <Link href={image?.src}>
                                <Figure.Image src={image?.src} alt="xx" />
                              </Link>
                              <Figure.Caption>
                                Source : {image.source}
                              </Figure.Caption>
                            </Figure>
                          </div>
                        </Col>
                        <Col sm={1} />
                      </Row>
                    }
                  </Row>
                </>
              );
            })}
      </main>
      <hr />
      <div className={styles.tags}>
        <p>Tags : </p>
        {articleData?.tags?.map((tag) => {
          return (
            <Link key={tag} href="#">
              <Badge className={styles.badge}>{tag}</Badge>
            </Link>
          );
        })}
      </div>
      <hr />
    </article>
  );
};

export default Article;
