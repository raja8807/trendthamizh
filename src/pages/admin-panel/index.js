import CreateArticle from "@/components/admin-panel/create-article/create-article";
import Layout from "@/components/layout/layout";
import { signIn, signOut } from "next-auth/react";

import { useSession } from "next-auth/react";

const AdminPanel = () => {
  const session = useSession();

  // console.log();

  if (session.status === "unauthenticated") {
    signIn();
  }
  return session.data ? (
    <Layout>
      <button
        onClick={() => {
          signOut({
            callbackUrl: "/",
          });
        }}
      >
        LogOut
      </button>

      {/* <p>{process.env.MONGO_URI}</p> */}
      <CreateArticle />
      <br/>
      <br/>
      <br/>
      <p>{process.env.NEXT_PUBLIC_MONGO_URI}</p>
    </Layout>
  ) : (
    <div></div>
  );
};

export default AdminPanel;
