import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    
    try {
      await axios.put(`http://localhost:5000/api/posts/${id}`, 
        { title, content },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      navigate('/');
    } catch (error) {
      console.error('Error updating post:', error);
      alert('Failed to update post. Are you logged in?');
    }
  };

  return (
    <div className="form-container">
      <h1 className="page-title">Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn-primary" style={{ width: '100%' }}>
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
