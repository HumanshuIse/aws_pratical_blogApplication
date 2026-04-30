import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">BlogApp</Link>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/create" className={`btn-primary ${location.pathname === '/create' ? 'active' : ''}`}>
          Create Post
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
