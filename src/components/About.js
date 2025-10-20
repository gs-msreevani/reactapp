import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About Page"; // Set the page title
  }, []);
  return <div id="about">I am about page</div>;
};

export default About;
