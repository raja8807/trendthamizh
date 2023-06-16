import { Badge, Button, Card, Row } from "react-bootstrap";
import styles from "./article_card.module.scss";
import Link from "next/link";
import ShareButtons from "@/components/ui/share-buttons/shrare_buttons";

const ArticlePreviewCard = (props) => {
  const { articlePreview } = props;

  // console.log(articlePreview);

  const paragraphs = articlePreview?.content?.split(".");

  // console.log(articlePreview);

  const getDate = () => {
    const date = new Date(articlePreview?.createdAt);
    return date.toDateString();
  };

  return (
    <div className={styles.article_preview}>
      <Link href={`/article/${articlePreview.title}`}>
        <Card className={styles.article_preview_card}>
          <div className={styles.article_preview_image}>
            <Card.Img variant="top" src={articlePreview?.bannerImage?.src} />

            <div className={styles.tags}>
              {articlePreview?.tags?.map((tag) => {
                return (
                  <Link key={tag} href={`/tag/${tag}`}>
                    <Badge className={styles.badge}>{tag}</Badge>
                  </Link>
                );
              })}
            </div>
            {/* <div className={styles?.share_btns}>
              <ShareButtons
                data={{
                  heading: articlePreview?.heading,
                  tags: articlePreview?.tags,
                }}
              />
            </div> */}
          </div>
          <Card.Body>
            <Card.Title>
              <h2>{articlePreview?.heading}</h2>
            </Card.Title>
            <Card.Text className={styles.description}>
              {paragraphs[0]}
            </Card.Text>
            <small>{getDate()}</small>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default ArticlePreviewCard;
