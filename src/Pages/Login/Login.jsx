import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement your login logic here
    console.log(
      `Logged in with email/username: ${email} and password: ${password}`
    );
  };
  return (
    <div className="Login">
      <Navbar />
      <div className="login-container">
        <h2>Login</h2>
        <div className="input-group">
          <label>Email/Username:</label>
          <input
            type="text"
            placeholder="Enter your email or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
