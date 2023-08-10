"use client";
import Image from "next/image";
import "./style.css";
import loginBackground from "../../assets/images/loginBackground.svg";
import Email from "../../assets/icons/email.svg";
import Password from "../../assets/icons/password.svg";
import passwordShow from "../../assets/icons/passwordShow.svg";
import passwordHide from "../../assets/icons/passwordHide.svg";
import { useState } from "react";
import Link from "next/link";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";

const Register = () => {
  const [hide, setHide] = useState(false);
  const [email, setEmail] = useState({
    value: "",
    error: "",
  });
  const [password, setPassword] = useState({
    value: "",
    error: "",
  });
  const [username, setUsername] = useState({
    value: "",
    error: "",
  });

  return (
    <div className="registerContainer">
      <div className="registerRight">
        <Image
          src={loginBackground}
          alt="registerBackground"
          className="registerImage"
        />
      </div>
      <div className="registerLeft">
        <h1 className="heading1 registerHeading">Welcome</h1>
        <p className="pera registerPera">
          Simplify Your Contacts, Amplify Your Network – Join our Registration
          and Experience Seamless Organization.
        </p>
        <div className="registerForm">
          <div>
            <Input
              type={"text"}
              placeholder={"Enter your username"}
              label={"Username"}
              startIcon={Password}
              cursor={true}
              onChange={(e) => {
                setUsername((perValue) => ({
                  ...perValue,
                  value: e.target.value,
                }));
              }}
              value={username.value}
            />
          </div>
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
          <Button label={"register"} loadingColor={"white"} />
        </div>
        <div className="authLinksContainer">
          <p>You have a account</p>
          <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
