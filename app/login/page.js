"use client";
import Image from "next/image";
import "./login.css";
import loginBackground from "../../assets/images/loginBackground.svg";
import Email from "../../assets/icons/email.svg";
import Password from "../../assets/icons/password.svg";
import passwordShow from "../../assets/icons/passwordShow.svg";
import passwordHide from "../../assets/icons/passwordHide.svg";
import { useState } from "react";
import Link from "next/link";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import apiCall from "../../redux/services/apiCall";
import { useRouter } from "next/navigation";
import { makeUserLogin } from "../../utils";
import { API_LOGIN } from "../../redux/services/apiTypes";

const Login = () => {
  const router = useRouter();
  const [hide, setHide] = useState(false);
  const [email, setEmail] = useState({
    value: "",
    error: "",
  });
  const [password, setPassword] = useState({
    value: "",
    error: "",
  });

  const [loading, setLoading] = useState(false);

  const submitHandler = () => {
    setLoading(true);
    let payload = {
      email: email.value,
      password: password.value,
    };

    let apiData = {
      type: API_LOGIN,
      payload: payload,
      apiType: "POST",
    };

    apiCall(apiData)
      .then((res) => {
        makeUserLogin(res);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="loginContainer">
      <div className="loginRight">
        <Image
          src={loginBackground}
          alt="loginBackground"
          className="loginImage"
        />
      </div>
      <div className="loginLeft">
        <h1 className="heading1 loginHeading">Welcome</h1>
        <p className="pera loginPera">
          Simplify Your Contacts, Amplify Your Network – Join our Registration
          and Experience Seamless Organization.
        </p>
        <div className="loginForm">
          <div>
            <Input
              type={"text"}
              placeholder={"example@gmail.com"}
              label={"Email"}
              startIcon={Email}
              value={email.value}
              onChange={(e) => {
                setEmail((perValue) => ({
                  ...perValue,
                  value: e.target.value,
                }));
              }}
            />
          </div>
          <div>
            <Input
              type={hide ? "text" : "password"}
              placeholder={"Enter your password"}
              label={"Password"}
              startIcon={Password}
              endIcon={hide ? passwordShow : passwordHide}
              endOnClick={() => {
                setHide(!hide);
              }}
              cursor={true}
              onChange={(e) => {
                setPassword((perValue) => ({
                  ...perValue,
                  value: e.target.value,
                }));
              }}
              value={password.value}
            />
          </div>
          <Button
            label={"login"}
            loadingColor={"white"}
            onClick={submitHandler}
            loading={loading}
          />
        </div>
        <div className="authLinksContainer">
          <p>Create a new account</p>
          <Link href={"/register"}>Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
