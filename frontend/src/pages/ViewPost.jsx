import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ViewPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setPost(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post:', error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    if (!user) return alert('Please login to delete');
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await axios.delete(`http://localhost:5000/api/posts/${id}`, {
          headers: { Authorization: `Bearer ${user.token}` }
        });
        navigate('/');
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  if (loading) {
    return <div className="loading">Loading post...</div>;
  }

  if (!post) {
    return <div className="container"><h2>Post not found</h2></div>;
  }

  return (
    <div className="view-post">
      <h1 className="view-post-title">{post.title}</h1>
      <div className="view-post-meta">
        <div>
          <strong>By {post.author}</strong> • {new Date(post.createdAt).toLocaleDateString()}
          <span style={{ marginLeft: '1rem' }}>👍 {post.likes}</span>
        </div>
        {user && (
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button onClick={() => navigate(`/edit/${post._id}`)} className="btn-primary" style={{ backgroundColor: '#10b981' }}>Edit</button>
            <button onClick={handleDelete} className="btn-danger">Delete</button>
          </div>
        )}
      </div>
      <div className="view-post-content">
        {post.content}
      </div>
    </div>
  );
};

export default ViewPost;
