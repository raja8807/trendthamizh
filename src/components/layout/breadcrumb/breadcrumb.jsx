const { Breadcrumb } = require("react-bootstrap");
import Link from "next/link";
import { useRouter } from "next/router";

const CustomBreadcrumbs = () => {
  const router = useRouter();

  const path = router.asPath.split("/")[1];

  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link href="/">home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link href={`/${path}`}>{path}</Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default CustomBreadcrumbs;
