// const { default: Image } = require("next/image");
const { Row, Col, Image, Figure, Badge } = require("react-bootstrap");
import Link from "next/link";
import styles from "./article.module.scss";
import ShareButtons from "@/components/ui/share-buttons/shrare_buttons";
import { InstagramEmbed, YouTubeEmbed } from "react-social-media-embed";
import { useState } from "react";

import axios from "axios";
import CreateArticle from "@/components/admin-panel/create-article/create-article";
import CustomButton from "@/components/ui/custom-button/custom-button";
import { useSession } from "next-auth/react";

const Article = (props) => {
  const { title, article } = props;
  const session = useSession();

  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const deleteArticle = () => {
    if (confirm("Sure To Delete " + title + "?")) {
      setIsDeleteLoading(true);

      axios.delete(`/api/article/${title}`).then((res) => {
        if (res.status === 200) {
          setIsDeleteSuccess(true);
          setIsDeleteLoading(false);
        }
      });
    }
  };

  const getDate = () => {
    const date = new Date(article?.createdAt);
    return date.toDateString();
  };

  const sentences = article?.content?.split(". ");
  const joiSentencesBy = 4;

  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr?.length / size) }, (v, i) =>
      arr?.slice(i * size, i * size + size)
    );

  const paragraphs = chunk(sentences, joiSentencesBy)?.map((x) => x.join(". "));

  const YOUTUBE_DEFAULT_HEIGHT = 300;
  const [embedHeight, setEmbedHeight] = useState(YOUTUBE_DEFAULT_HEIGHT);
  const [ShowEditPage, setShowEditPage] = useState(false);
  return (
    <>
      {isDeleteLoading && <p>Loading.....</p>}
      {isDeleteSuccess && <p>This Article has been deleted</p>}
      {article && (
        <article className={styles.article}>
          <p>
            <Link href="/">Home</Link> /{" "}
            <Link href={`/category/${article?.category}`}>
              {article?.category}
            </Link>{" "}
            / <Link href="#">{article?.title}</Link>
          </p>
          <br />

          {session.data && (
            <>
              <CustomButton clickHandler={deleteArticle}>
                Delete Article
              </CustomButton>
              <CustomButton
                clickHandler={() => {
                  setShowEditPage(!ShowEditPage);
                }}
              >
                Edit Article
              </CustomButton>
              {ShowEditPage && (
                <CreateArticle type="update" articleData={article} />
              )}
            </>
          )}
          <div>
            <h1>{article?.heading}</h1>
            <div className={styles.details}>
              <p>
                <small>published: {getDate()}</small>
                &nbsp; By <b>{article?.createdBy}</b>
              </p>
              <ShareButtons
                data={{
                  heading: article?.heading,
                  tags: article?.tags,
                }}
              />
            </div>
            <p>
              &#128065; <small>{article?.viewsCount}</small>
            </p>
            <br />
            <Figure>
              <Figure.Image
                src={article?.bannerImage?.src}
                alt={article?.bannerImage?.name}
              />
            </Figure>
          </div>

          <main>
            {paragraphs?.length > article?.images?.length
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
                        {article?.images?.[idx] && (
                          <Row>
                            <Col sm={1} />
                            <Col sm={10}>
                              <div className={styles.image_container}>
                                <Figure>
                                  <Figure.Image
                                    src={article?.images?.[idx]?.src}
                                    alt="xx"
                                  />
                                  <Figure.Caption>
                                    <Link
                                      href={article?.images?.[idx]?.source}
                                      target="_blank"
                                    >
                                      Source : {article?.images?.[idx]?.source}
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
              : article?.images?.map((image, idx) => {
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
                                    <Link href={image?.source}>
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
          {article?.youtubeLink && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              {/* <br /> */}
              <YouTubeEmbed
                url={article?.youtubeLink}
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
          {article?.instagramLink && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <InstagramEmbed url={article?.instagramLink} width={400} />
            </div>
          )}
          <hr />
          <div className={styles.article_footer}>
            <div className={styles.tags}>
              <p>Tags &nbsp; : </p>
              {article?.tags?.map((tag) => {
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
                  heading: article?.heading,
                  tags: article?.tags,
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
