import React, { useEffect, useState } from "react";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    document.title = "Contact Page";

    const fullUrl = window.location.href;
    const currentPageType = fullUrl.includes("contact") ? "contact" : "other";

    if (typeof window.aptrinsic === "function") {
      window.aptrinsic("set", "user", { pageType: currentPageType });
      console.log("Aptrinsic user attribute set with:", currentPageType);
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>I am contact page</h1>

      <a
        href="https://en.wikipedia.org/wiki/Millet"
        target="_blank"
        rel="noopener noreferrer">
        Millets
      </a>

      <br />
      <br />

      {/* Help Button */}
      <button
        id="help-btn"
        onClick={() => setShowPopup(true)}
        style={{
          padding: "8px 14px",
          cursor: "pointer",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}>
        Help Popup
      </button>

      {/* Popup Modal */}
      {showPopup && (
        <div id="popup-wrapper">
          {/* Overlay */}
          <div
            id="popup-overlay"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.4)",
              zIndex: 999,
            }}
            onClick={() => setShowPopup(false)}></div>

          {/* Popup Box */}
          <div
            id="popup-box"
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "350px",
              zIndex: 1000,
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}>
            <h3>Help Options</h3>

            {/* Radio Buttons */}
            <div id="radio-group">
              <p>
                <strong>Select an Option:</strong>
              </p>

              <label htmlFor="radio-option1">
                <input
                  type="radio"
                  id="radio-option1"
                  name="help-option"
                  value="option1"
                />
                Option 1
              </label>
              <br />

              <label htmlFor="radio-option2">
                <input
                  type="radio"
                  id="radio-option2"
                  name="help-option"
                  value="option2"
                />
                Option 2
              </label>
            </div>

            <hr />

            {/* Checkboxes */}
            <div id="checkbox-group">
              <p>
                <strong>Choose Preferences:</strong>
              </p>

              <label htmlFor="checkbox-pref1">
                <input type="checkbox" id="checkbox-pref1" value="pref1" />
                Preference 1
              </label>
              <br />

              <label htmlFor="checkbox-pref2">
                <input type="checkbox" id="checkbox-pref2" value="pref2" />
                Preference 2
              </label>
              <br />

              <label htmlFor="checkbox-pref3">
                <input type="checkbox" id="checkbox-pref3" value="pref3" />
                Preference 3
              </label>
            </div>

            <hr />

            {/* Dropdown */}
            <div id="dropdown-group">
              <p>
                <strong>Select Category:</strong>
              </p>

              <select
                id="dropdown-category"
                style={{ width: "100%", padding: "6px" }}>
                <option value="A">Category A</option>
                <option value="B">Category B</option>
                <option value="C">Category C</option>
              </select>
            </div>

            <br />

            {/* Close Button */}
            <button
              id="close-popup-btn"
              onClick={() => setShowPopup(false)}
              style={{
                padding: "8px 12px",
                background: "#dc3545",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
