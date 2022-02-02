import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="container py-5">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1 className="text-center py-5 mt-5  bg-dark text-light">Home page</h1>
    </div>
  );
};

export default Home;
