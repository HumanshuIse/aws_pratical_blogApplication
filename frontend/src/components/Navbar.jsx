import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(JSON.parse(localStorage.getItem('user')));
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">BlogApp</Link>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        {user ? (
          <>
            <span style={{ marginLeft: '1.5rem', color: 'var(--text-muted)' }}>Hello, {user.username}</span>
            <Link to="/create" className={`btn-primary ${location.pathname === '/create' ? 'active' : ''}`}>
              Create Post
            </Link>
            <button onClick={handleLogout} className="btn-danger" style={{ marginLeft: '1.5rem' }}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Link>
            <Link to="/register" className={`btn-primary ${location.pathname === '/register' ? 'active' : ''}`}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
