import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

function Schedule() {
  return (
    <nav>
      <ul className="nav-links">
        <Link className="menu" to="/">
          <li>JKT48 Theater Schedule</li>
        </Link>
        <Link className="menu" to="/">
          <li>Home</li>
        </Link>
        <Link className="menu" to="/team-j">
          <li>Team J</li>
        </Link>
        <Link className="menu" to="/team-k">
          <li>Team KIII</li>
        </Link>
        <Link className="menu" to="/team-t">
          <li>Team T</li>
        </Link>
        <Link className="menu" to="/academy-class-a">
          <li>Academy Class A</li>
        </Link>
        <Link className="menu" to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Schedule;
