import React from "react";
import "./styles.css";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("form enviado");
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
