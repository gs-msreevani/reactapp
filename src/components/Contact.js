import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Page"; // Set the page title
    const fullUrl = window.location.href;
    const currentPageType = fullUrl.includes("contact") ? "contact" : "other";
    console.log(currentPageType);
    if (typeof window.aptrinsic === "function") {
      window.aptrinsic("set", "user", { pageType: currentPageType });
      console.log(
        "Aptrinsic user attribute set with pageType:",
        currentPageType
      );
    }
  }, []);
  return (
    <div>
      <h1> I am contact page </h1>
      <a
        href="https://en.wikipedia.org/wiki/Millet"
        target="_blank"
        rel="noopener noreferrer">
        Millets
      </a>
    </div>
  );
};

export default Contact;
