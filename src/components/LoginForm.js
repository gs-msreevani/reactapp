import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    if (!username || !password || !email || !account) {
      alert("Please fill in all fields.");
      return;
    }

    // Identify user with Aptrinsic (if integrated)
    if (window.aptrinsic) {
      window.aptrinsic(
        "identify",
        {
          id: email,
          email: email,
          firstName: username,
          first_login_date: new Date().toISOString(),
        },
        {
          id: account,
          name: account,
        }
      );
    }
    if (window.pendo) {
      window.pendo.initialize({
        visitor: {
          id: email,
          email: email, // Recommended if using Pendo Feedback, or NPS Email
          full_name: username, // Recommended if using Pendo Feedback
        },
        account: {
          id: account,
          name: account, // Optional
        },
      });
    }

    onLogin(); // Set isLoggedIn = true in App.js
    navigate("/home"); // Redirect to /home
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>Username:</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label>Account Name:</label>
        <input value={account} onChange={(e) => setAccount(e.target.value)} />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
