import CreateArticle from "@/components/admin-panel/create-article/create-article";
import Layout from "@/components/layout/layout";

import { useState } from "react";

const AdminPanel = () => {
  return (
    <Layout>
      <CreateArticle />
    </Layout>
  );
};

export default AdminPanel;
