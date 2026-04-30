import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to <span style={{ color: 'var(--primary-color)' }}>Blogify</span></h1>
        <p className="hero-subtitle">
          Discover stories, thinking, and expertise from writers on any topic. 
          Join our community and start sharing your own ideas today.
        </p>
        <div className="hero-buttons">
          <Link to="/posts" className="btn-primary" style={{ fontSize: '1.1rem', padding: '0.75rem 1.5rem' }}>
            Start Reading
          </Link>
          <Link to="/register" className="btn-secondary" style={{ fontSize: '1.1rem', padding: '0.75rem 1.5rem' }}>
            Join Blogify
          </Link>
        </div>
      </div>
      
      <div className="features-section">
        <div className="feature-card">
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Read</h3>
          <p style={{ color: 'var(--text-muted)' }}>Explore hundreds of articles on programming, design, and more.</p>
        </div>
        <div className="feature-card">
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Write</h3>
          <p style={{ color: 'var(--text-muted)' }}>Publish your ideas to a growing audience and establish your voice.</p>
        </div>
        <div className="feature-card">
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Connect</h3>
          <p style={{ color: 'var(--text-muted)' }}>Like and interact with posts from other community members.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
