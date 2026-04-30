import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post, onDelete, onLike }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  const handleDelete = (e) => {
    e.preventDefault(); // Prevent navigation when clicking delete
    if (window.confirm('Are you sure you want to delete this post?')) {
      onDelete(post._id);
    }
  };

  return (
    <div className="post-card">
      <h3 className="post-title">{post.title}</h3>
      <div className="post-meta">
        <span>By {post.author}</span> • <span>{new Date(post.createdAt).toLocaleDateString()}</span>
      </div>
      <p className="post-excerpt">{post.content}</p>
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <button onClick={() => onLike(post._id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>
          👍 {post.likes}
        </button>
      </div>

      <div className="post-actions">
        <Link to={`/post/${post._id}`} className="btn-primary">Read More</Link>
        {user && (
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Link to={`/edit/${post._id}`} className="btn-primary" style={{ backgroundColor: '#10b981' }}>Edit</Link>
            <button onClick={handleDelete} className="btn-danger">Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
