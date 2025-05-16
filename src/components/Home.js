import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Homepage"; // Set the page title
  }, []);
  return (
    <div>
      <h1>I am home page</h1>
    </div>
  );
};

export default Home;
