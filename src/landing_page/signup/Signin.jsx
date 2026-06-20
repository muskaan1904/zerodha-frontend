import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function Signin() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("error") === "auth_failed") {
      localStorage.removeItem("token");
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };    

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await
      axios.post(`${API_URL}/auth/signin`, formData, {
  withCredentials: true,
});

      console.log("signin route hit");
      setMessage(res.data.message);

      console.log("User:", res.data.user);
      console.log("Token:", res.data.token);

      localStorage.setItem("token", res.data.token);
      // setTimeout(() => {

      //   window.location.href = `http://localhost:3001/?token=${res.data.token}`;
      // }, 500);
      setTimeout(() => {
  window.location.href = `http://localhost:3004/?token=${res.data.token}`;
}, 500);
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Signin failed"
      );
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Sign In</h2>

        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            style={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button style={styles.button} type="submit">
            Sign In
          </button>
        </form>

        <p style={styles.linkText}>
          Don't have an account?{" "}
          <Link to="/signup" style={styles.link}>
            Sign Up
          </Link>
        </p>

        {message && (
          <p
            style={{
              ...styles.message,
              color:
                message.toLowerCase().includes("success")
                  ? "green"
                  : "red",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Signin;

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f7fa",
  },
  card: {
    width: "350px",
    padding: "30px",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    color: "#387ed1",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#387ed1",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  linkText: {
    marginTop: "15px",
    fontSize: "14px",
  },
  link: {
    color: "#387ed1",
    textDecoration: "none",
    fontWeight: "bold",
  },
  message: {
    marginTop: "15px",
    fontWeight: "500",
  },
};