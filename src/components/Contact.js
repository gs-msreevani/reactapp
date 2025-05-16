import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Page"; // Set the page title
  }, []);
  return (
    <div>
      <h1> I am contact page </h1>
    </div>
  );
};

export default Contact;
