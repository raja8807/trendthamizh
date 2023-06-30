import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./signin.module.scss";
import Link from "next/link";

const SignInPage = () => {
  const [userInfo, setUserInfo] = useState({ userName: "", password: "" });
  const [error, setError] = useState({
    userName: null,
    password: null,
  });
  const [touched, setTouched] = useState({ userName: false, password: false });
  const [showPassword,setShowPassword] = useState(false)

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidPassword = userInfo.password.length > 7;
    if (isValidPassword) {
      setError(null);
      const res = await signIn("credentials", {
        userName: userInfo.userName,
        password: userInfo.password,
        redirect: false,
        callbackUrl:'/admin-panel'
      });

    

      if (res.ok) {
        const { callbackUrl } = router.query;
        router.push(callbackUrl);
      }

      if (res.error) {
        setError(JSON?.parse(res?.error));
      }
    }
  };

  return (
    <div className={styles.signin}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <input
            placeholder="User Name"
            value={userInfo.userName}
            onChange={({ target }) => {
              setTouched({ ...touched, userName: true });
              setError({ ...error, userName: null });
              setUserInfo({ ...userInfo, userName: target.value });
              if (touched.userName) {
                if (!target.value) {
                  setError({ ...error, userName: "User Name Required" });
                }
              }
            }}
            className={error?.userName ? styles.error : ""}
          />
          <small>{error?.userName}</small>
        </div>
        <div>
        <input
          type={!showPassword ? "password" : 'text'}
          placeholder="Password"
          value={userInfo.password}
          onChange={({ target }) => {
            setError({ ...error, password: null });
            setTouched({ ...touched, password: true });
            setUserInfo({ ...userInfo, password: target.value });
            if (touched.password) {
              if (!target.value) {
                setError({ ...error, password: "Password Required" });
              }
              if (target.value.length < 8) {
                setError({
                  ...error,
                  password: "Password Must Have Atleast 8 Characters",
                });
              }
            }
          }}
          className={error?.password ? styles.error : ""}
        />
        <span
        onClick={()=>{
            setShowPassword(!showPassword)
        }}
        className={showPassword ? styles.active : ''}
        >&#128065;</span>
        <small>{error?.password}</small>
        </div>
        <input
          type="submit"
          disabled={userInfo.password?.length < 8 || !userInfo.userName}
        />
      <Link href='/contact'>Become a Creator</Link>
      </form>
    </div>
  );
};

export default SignInPage;
