import React, { useState } from "react";
import "./header.css";
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('mor_2314');
  const [password, setPassword] = useState('83r5^_');

  const handleLoginClick = () => {
    fetch('https://fakestoreapi.com/auth/login',{
          method:'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({username: username,
          password: password})
        })
            .then(res=>res.json())
            .then((json)=> {
              console.log(json);
              if (json.token) {
                navigate('/product');
              } 
            }, (error) => {
              alert("Incorrect Username or password");
            });
    
  };

 

  return (
    <div className="zelda">
       <header className="header">
      <div className="logo">
        <img  className="logo" src="https://demanddriventech.com/wp-content/uploads/PwC-Logo.jpg" alt="PWC Logo"></img>
      </div>
      <div>
      
          <label className="input">
            User name:
            <input className="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label className="input"> 
            Password:
            <input  className="password"type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button onClick={handleLoginClick} disabled={!username || !password} className="loginbtn" type="submit">Login</button>
       
      </div>
     
    </header>
    <div className="zelda-heading">
      Zelda
    </div>
    <img className="img" src="https://www.psghospitals.com/wp-content/uploads/2022/08/pharmacy.jpg" alt="base"/>
    </div>
  );
}

export default Home;
