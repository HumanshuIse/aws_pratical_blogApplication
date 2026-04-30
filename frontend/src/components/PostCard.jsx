import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post, onDelete }) => {
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
      <div className="post-actions">
        <Link to={`/post/${post._id}`} className="btn-primary">Read More</Link>
        <button onClick={handleDelete} className="btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default PostCard;
