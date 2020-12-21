import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";


function Schedule() {

  return (
    <nav>
      <Link className="menu" to="/">
        <h3 className="logo">JKT48 Theater Schedule</h3>
      </Link>
      <ul className="nav-links">
        <Link className="menu" to="/schedule">
          <li>Schedule</li>
        </Link>
        <Link className="menu" to="/">
          <li>Team J</li>
        </Link>
        <Link className="menu" to="/">
          <li>Team KIII</li>
        </Link>
        <Link className="menu" to="/">
          <li>Team T</li>
        </Link>
        <Link className="menu" to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Schedule;
