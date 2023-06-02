import { Badge, Button, Card, Row } from "react-bootstrap";
import styles from "./article_card.module.scss";
import Link from "next/link";
import ShareButtons from "@/components/ui/share-buttons/shrare_buttons";

const ArticlePreviewCard = (props) => {
  const { articlePreview } = props;

 

  //   const articlePreview = {
  //     id: "123456",
  //     createdAt: new Date(),
  //     category: "cricket",
  //     bannerImage: {
  //       name: "Creicket Image",
  //       src: "/images/categories/cricket.jpg",
  //     },
  //     heading:
  //       "இந்த வருடம் ஓய்வு இல்லை.. ஆனால்.. கேப்டன் மாற்றம்? இதுதான் சிஎஸ்கே தோனியின் பிளான்? கேப்டன் அவரா?",
  //     description:
  //       "இந்த வருடம் ஓய்வு இல்லை.. ஆனால்.. கேப்டன் மாற்றம்? இதுதான் சிஎஸ்கே தோனியின் பிளான்? கேப்டன் அவரா? இந்த வருடம் ஓய்வு இல்லை.. ஆனால்.. கேப்டன் மாற்றம்? இதுதான் சிஎஸ்கே தோனியின் பிளான்? கேப்டன் அவரா?",
  //     tags: ["ipl", "cricket", "csk", "dhoni", "2023"],
  //   };

  const getDate = () => {
    const date = new Date(articlePreview?.createdAt);

    return date.toDateString();
  };

  return (
    <div className={styles.article_preview}>
      <Link
        href={`/article/${articlePreview.title}`}
      >
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
            <ShareButtons data={
                {
                    heading:articlePreview?.heading,
                    tags:articlePreview?.tags
                }
            }
                />
          </div> */}
          </div>
          <Card.Body>
            <Card.Title>
              <h2>{articlePreview?.heading}</h2>
            </Card.Title>
            <Card.Text className={styles.description}>
              {articlePreview?.paragraphs[0]}
            </Card.Text>
            <small>{getDate()}</small>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default ArticlePreviewCard;
