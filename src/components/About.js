import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About Page"; // Set the page title
    // Function to run on DOMContentLoaded
    const fullUrl = window.location.href;
    const currentPageType = fullUrl.includes("about") ? "about" : "other";
    console.log(currentPageType);
    if (typeof window.aptrinsic === "function") {
      window.aptrinsic("set", "usersree", { pageType: currentPageType });
      console.log(
        "Aptrinsic user attribute set with pageType:",
        currentPageType
      );
    }
  }, []);
  return (
    <div id="about">
      <p>I am about page</p>
      <a
        href="https://en.wikipedia.org/wiki/ChatGPT"
        target="_blank"
        rel="noopener noreferrer">
        ChatGPT
      </a>
    </div>
  );
};

export default About;
