const { Row, Col, Carousel } = require("react-bootstrap");
import styles from "./side_bar.module.scss";
import TopPicks from "./top-picks/top_picks";
import Related from "./related/related";
import Latest from "./latest/latest";
const SideBar = (props) => {
  const { categoryName, tags = [] } = props;
  return (
    
      <Row className={styles.side_bar}>
        <Row>
          <TopPicks categoryName={categoryName} />
        </Row>

        {categoryName !== "home" && (
          <Row>
            <Related tags={tags} />
          </Row>
        )}
        <Row>
          <Latest
            categoryName={categoryName === "tags" ? "home" : categoryName}
          />
        </Row>
      </Row>
    
  );
};

export default SideBar;
