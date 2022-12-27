import React from "react";
import { useFields } from "../../hooks/validatefields";
import "./styles.css";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { handleValidateField, errors, resetFields, showMessageFieldError } =
    useFields();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) {
      handleValidateField({
        field: "email",
        message: "Field email cannot be empty",
      });
    }
    if (!password) {
      handleValidateField({
        field: "password",
        message: "Field password cannot be empty",
      });
    }
    resetFields();
  }

  function handleReset() {
    setEmail("");
    setPassword("");
  }

  return (
    <div className="container">
      <div className="content">
        <h2> React Testing App</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email"> Email</label>
          <input
            value={email}
            type="text"
            placeholder="Enter email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span> {showMessageFieldError(email)}</span>
          <label> Password </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="btn-container">
            <button> Submit </button>
            <button onClick={handleReset}> Reset </button>
          </div>
        </form>
      </div>
    </div>
  );
}
