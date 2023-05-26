import styles from './page_heading.module.scss'

const PageHeading = (props) => {
  const { heading } = props;

  return <h1 className={styles.heading}>{heading}</h1>;
};

export default PageHeading;
