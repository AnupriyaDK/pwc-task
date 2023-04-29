import React, { useState } from "react";
import "./header.css";

function Home() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <header className="header">
      <div className="logo">
        <img  className="logo" src="https://demanddriventech.com/wp-content/uploads/PwC-Logo.jpg" alt="PWC Logo"></img>
      </div>
      <div>
      {showLoginForm ? (
              <form onSubmit={handleLoginFormSubmit}>
                <label className="input">
                  UserName:
                  <input className="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label className="input"> 
                  Password:
                  <input  className="password"type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button className="loginbtn" type="submit">Login</button>
              </form>
            ) : (
              <button  onClick={handleLoginClick}>Login</button>
            )}
    </div>
    </header>
  );
}

export default Home;
