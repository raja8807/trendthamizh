const { Breadcrumb } = require("react-bootstrap");
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./breadcrumbs.module.scss";

const CustomBreadcrumbs = () => {
  const router = useRouter();

  const path = router.asPath.split("/")[1];

  return (
    <Breadcrumb className={styles.breadcrumbs}>
      <Breadcrumb.Item className={styles.breadcrumb_item} active={path.length < 1}>
        <Link href="/">Home</Link>
      </Breadcrumb.Item>
      {path.length > 1 && (
        <Breadcrumb.Item className={styles.breadcrumb_item} active>
          <Link href={`/${path}`}>{path}</Link>
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
};

export default CustomBreadcrumbs;
