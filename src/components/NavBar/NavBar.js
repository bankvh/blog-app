import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <div><Link to="/" className="link">Blogs App</Link></div>
      <div className="navbar-menu">
        <Link to="/" className="link">Home</Link>
        <Link to="/blog" className="link">Create Blog</Link>
      </div>
    </div>
  );
}

export default NavBar;
