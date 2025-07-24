import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      alert("Login Successful!");

      if (user.role === "parent") {
        navigate("/parent/dashboard");
      } else {
        alert("Other role login not configured.");
      }
    } else {
      alert("Invalid credentials.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
        </div>

        <button type="submit" className="btn btn-success">Login</button>
      </form>
    </div>
  );
};

export default SignIn;
