import React from "react";
import { Helmet } from "react-helmet";

const Login = () => {
  return (
    <div className="container py-5">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <h1 className="text-center py-5 mt-5  bg-dark text-light">
        Login page !
      </h1>
    </div>
  );
};

export default Login;
