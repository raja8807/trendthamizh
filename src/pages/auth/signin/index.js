import Header from "@/components/layout/header/header";

const { default: SignInPage } = require("@/components/signin/signin");

const SignIn = () => {
  return (
    <>
      <Header />
      <SignInPage />
    </>
  );
};

export default SignIn;
