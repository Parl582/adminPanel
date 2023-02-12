import React from "react";
import CommonLog from "./Common";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const Logidata = {
    PageName: "SIGN IN",
    btnText: "Login",
    newhere: "Are you New here?",
    newLink: "Sign up",
    forget: "Forgot Password?",
    mainUrl: "/login",
  };

  const PageChange = () => {
    navigate("/home");
  };
  return (
    <>
      <CommonLog data={Logidata} PageChange={PageChange} />
    </>
  );
};

export default Login;
