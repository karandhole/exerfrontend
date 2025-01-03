import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn({ changeKey }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = { email, password };

    try {
      const response = await axios.post(`https://exerbackend-cm9f.vercel.app/login`, formData);
      const responseData = response.data;

      if (responseData.success) {
        localStorage.setItem("token", responseData.token);
        localStorage.setItem("email", formData.email);

        if (responseData.role === "admin") {
          alert("Admin Sign-In successful");
          console.log("Admin signed in successfully");
          navigate("/admin"); // Redirect to admin page
        } else if (responseData.role === "user") {
          alert("User Sign-In successful");
          console.log("User signed in successfully");
          navigate("/"); // Redirect to the home page
          window.location.reload();
        } else {
          alert("Invalid role. Please contact support.");
        }
      } else {
        alert(responseData.errors || "Sign-In failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during sign-in.");
    }
  };

  return (
    <form id="Login-Form" onSubmit={handleLogin}>
      <FloatingLabel controlId="login-email" label="E-mail" className="mb-3">
        <Form.Control
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
      </FloatingLabel>

      <FloatingLabel controlId="login-password" label="Password" className="mb-3">
        <Form.Control
          placeholder="Password"
          autoComplete="current-password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text" : "password"}
          name="password"
        />
      </FloatingLabel>

      <div className="form-link">
        <h6 className="font-size-small">
          Forgot Password? &nbsp;
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              changeKey();
            }}
          >
            SignUp here!
          </Link>
        </h6>
      </div>

      <div className="form-checkbox">
        <Form.Check
          label="Show password"
          onChange={(e) => setShowPassword(e.target.checked)}
        />
        <Form.Check label="Remember me!" defaultChecked />
      </div>

      <br />

      <button type="submit" className="btn btn-warning mb-3">
        Sign-In
      </button>

      <br />

      <div className="mt-3 hr-for-or text-center mx-auto">
        <hr /> &nbsp; <span className="align-top"> or </span> &nbsp; <hr />
      </div>

      <button type="button" className="login-with-google-btn" disabled>
        Sign in with Google
      </button>
    </form>
  );
}
