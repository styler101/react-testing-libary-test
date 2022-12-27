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
          <label htmlFor="email" aria-label="email">
            {" "}
            Email
          </label>
          <input
            value={email}
            type="email"
            placeholder="Enter email"
            data-testid="#email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span> {showMessageFieldError(email)}</span>
          <label htmlFor="password" aria-label="password">
            {" "}
            Password{" "}
          </label>
          <input
            type="password"
            placeholder="Password"
            data-testid="#password"
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
