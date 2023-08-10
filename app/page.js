"use client";

import { useEffect } from "react";
import Button from "../common/Button/Button";
import { makeUserLogout } from "../utils";
import { USER_TOKEN } from "../utils/constant";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Home = () => {
  const router = useRouter();

  const userToken = Cookies.get(USER_TOKEN);

  useEffect(() => {
    function checkAuth() {
      if (!userToken) {
        router.push("/login");
        return;
      }
    }

    checkAuth();
  }, [router, userToken]);

  return (
    <>
      <div>hello protect</div>
      <Button
        label={"logout"}
        onClick={() => {
          makeUserLogout();
          router.push("/login");
        }}
      />
    </>
  );
};

export default Home;
