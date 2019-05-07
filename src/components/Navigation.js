import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/About">About</Link>
        <br></br>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navigation;


