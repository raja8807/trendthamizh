import { Badge, Button, Card, Row } from "react-bootstrap";
import styles from "./article_card.module.scss";
import Link from "next/link";
import CustomButton from "@/components/ui/custom-button/custom-button";
import axios from "axios";
import { useState } from "react";
import { useSession } from "next-auth/react";

const ArticlePreviewCard = (props) => {
  const { articlePreview } = props;

  const session = useSession();

  console.log(session);

  // console.log(articlePreview);

  const paragraphs = articlePreview?.content?.split(".");

  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const deleteArticle = () => {
    if (confirm("Sure to delete " + articlePreview?.title + "?")) {
      setIsDeleteLoading(true);

      axios.delete(`/api/article/${articlePreview?.title}`).then((res) => {
        if (res.status === 200) {
          setIsDeleteSuccess(true);
          setIsDeleteLoading(false);
        }
      });
    }
  };

  const getDate = () => {
    const date = new Date(articlePreview?.createdAt);
    return date.toDateString();
  };

  return (
    <div className={styles.article_preview}>
      {session.data && (
        <CustomButton clickHandler={deleteArticle}>Delete</CustomButton>
      )}
      {isDeleteLoading && "Deleting..."}
      {isDeleteSuccess && "Deleted."}
      <Link href={`/article/${articlePreview.title}`}>
        <Card
          className={`${styles.article_preview_card} ${
            isDeleteSuccess && styles.deleted
          }`}
        >
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
