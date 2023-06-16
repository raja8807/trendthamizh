// const { default: Image } = require("next/image");
const { Row, Col, Image, Figure, Badge } = require("react-bootstrap");
import Link from "next/link";
import styles from "./article.module.scss";
import ShareButtons from "@/components/ui/share-buttons/shrare_buttons";
import { InstagramEmbed, YouTubeEmbed } from "react-social-media-embed";
import { useEffect, useState } from "react";

import axios from "axios";
import CustomButton from "@/components/ui/custom-button/custom-button";
// import { useRouter } from "next/router";

const Article = (props) => {
  const { title } = props;

  const [articleData, setArticleData] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(null);
    axios
      .get(`/api/article/${title}`)
      .then((res) => setArticleData(res?.data))
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(JSON.stringify(err));
        setIsLoading(false);
      });
  }, [title]);

  const deleteArticle = () => {
    setIsLoading(true);

    axios.delete(`/api/article/${title}`).then((res) => {
      if (res.status === 200) {
        setIsSuccess(true);
        setIsLoading(false);
      }
    });
  };

  const getDate = () => {
    const date = new Date(articleData?.createdAt);
    return date.toDateString();
  };

  const paragraphs = articleData?.content?.split(".");

  const YOUTUBE_DEFAULT_HEIGHT = 300;
  const [embedHeight, setEmbedHeight] = useState(YOUTUBE_DEFAULT_HEIGHT);

  return (
    <>
      {isLoading && <p>Loading.....</p>}
      {isError && <p>error</p>}
      {isSuccess && <p>This Article has been deleted</p>}
      {articleData && (
        <article className={styles.article}>
          <CustomButton clickHandler={deleteArticle}>
            Delete Article
          </CustomButton>
          <div>
            <h1>{articleData?.heading}</h1>
            <div className={styles.details}>
              <p>
                <small>published: {getDate()}</small>
                &nbsp; By <b>{articleData?.createdBy}</b>
              </p>
              <ShareButtons
                data={{
                  heading: articleData?.heading,
                  tags: articleData?.tags,
                }}
              />
            </div>
            <br />
            <Figure>
              <Figure.Image
                src={articleData?.bannerImage?.src}
                alt={articleData?.bannerImage?.name}
              />
            </Figure>
          </div>

          <main>
            {paragraphs?.length > articleData?.images?.length
              ? paragraphs?.map((para, idx) => {
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
                          {"."}
                        </p>
                        {articleData?.images?.[idx] && (
                          <Row>
                            <Col sm={1} />
                            <Col sm={10}>
                              <div className={styles.image_container}>
                                <Figure>
                                  <Figure.Image
                                    src={articleData?.images?.[idx]?.src}
                                    alt="xx"
                                  />
                                  <Figure.Caption>
                                    <Link
                                      href={articleData?.images?.[idx]?.src}
                                      target="_blank"
                                    >
                                      Source :{" "}
                                      {articleData?.images?.[idx]?.source}
                                    </Link>
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
                  const paragraph = paragraphs?.[idx];
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

                            {"."}
                          </p>
                        )}
                        {
                          <Row>
                            <Col sm={1} />
                            <Col sm={10}>
                              <div className={styles.image_container}>
                                <Figure>
                                  <Figure.Image src={image?.src} alt="xx" />
                                  <Figure.Caption>
                                    <Link href={image?.src}>
                                      Source : {image.source}
                                    </Link>
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
          {articleData?.youtubeLink && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              {/* <br /> */}
              <YouTubeEmbed
                url={articleData?.youtubeLink}
                width={400}
                height={embedHeight}
                youTubeProps={{
                  onReady: async (r) =>
                    (await r.target.getIframe()).addEventListener("load", () =>
                      setEmbedHeight((height) => height + 1)
                    ),
                }}
              />
              {/* <br /> */}
            </div>
          )}
          <br />
          {articleData?.instagramLink && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <InstagramEmbed url={articleData?.instagramLink} width={400} />
            </div>
          )}
          <hr />
          <div className={styles.article_footer}>
            <div className={styles.tags}>
              <p>Tags &nbsp; : </p>
              {articleData?.tags?.map((tag) => {
                return (
                  <Link key={tag} href={`/tag/${tag}`}>
                    <Badge className={styles.badge}>{tag}</Badge>
                  </Link>
                );
              })}
            </div>
            <br />
            <div className={styles.tags}>
              <p>Share :</p>
              <ShareButtons
                data={{
                  heading: articleData?.heading,
                  tags: articleData?.tags,
                }}
              />
            </div>
          </div>
          <hr />
        </article>
      )}
    </>
  );
};

export default Article;
