const {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,

  //   PinterestShareButton,
  //   PinterestIcon,
} = require("react-share");

import { useRouter } from "next/router";
import styles from "./share-buttons.module.scss";

const ShareButtons = (props) => {
  const { data } = props;

  const { heading, tags } = data;

  const router = useRouter();
  const url = `${process.env.NEXT_PUBLIC_APP_BASE_URL}${router.asPath}`;

  const size = 30;
  const isRound = false;

  return (
    <div className={styles.share_buttons}>
      
      <FacebookShareButton url={url} quote={heading} hashtag="#trenthamizh">
        <FacebookIcon size={size} round={isRound} />
      </FacebookShareButton>
      <TwitterShareButton url={url} quote={heading} hashtag="#trenthamizh">
        <TwitterIcon round={isRound} size={size} />
      </TwitterShareButton>
      <WhatsappShareButton url={url} quote={heading} hashtag="#trenthamizh">
        <WhatsappIcon round={isRound} size={size} />
      </WhatsappShareButton>

    </div>
  );
};

export default ShareButtons;
