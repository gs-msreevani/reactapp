import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "About Page";

    const fullUrl = window.location.href;
    const currentPageType = fullUrl.includes("about") ? "about" : "other";

    console.log("Current page type:", currentPageType);

    // Example Aptrinsic tracking
    if (typeof window.aptrinsic === "function") {
      window.aptrinsic("set", "user", { pageType: currentPageType });
      console.log(
        "Aptrinsic user attribute set with pageType:",
        currentPageType
      );
    }
  }, [location]); // track route changes too

  return (
    <div id="about">
      <h2>About Page</h2>
      <p>I am the about page.</p>

      {/* Example external link */}
      <a
        href="https://en.wikipedia.org/wiki/ChatGPT"
        target="_blank"
        rel="noopener noreferrer">
        ChatGPT
      </a>

      <hr />

      {/* Internal navigation */}
      <nav>
        <ul>
          <li>
            <Link to="product1">About Product 1</Link>
          </li>
          <li>
            <Link to="product2">About Product 2</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* Nested routes render here */}
      <Outlet />
    </div>
  );
};

export default About;
