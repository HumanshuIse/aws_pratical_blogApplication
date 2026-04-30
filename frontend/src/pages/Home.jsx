import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');

  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/posts');
      setPosts(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const user = JSON.parse(localStorage.getItem('user'));

  const handleDelete = async (id) => {
    if (!user) return alert('Please login to delete posts');
    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      setPosts(posts.filter(post => post._id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete. Are you authorized?');
    }
  };

  const handleLike = async (id) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/posts/${id}/like`);
      setPosts(posts.map(post => post._id === id ? { ...post, likes: res.data.likes } : post));
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const filteredAndSortedPosts = posts
    .filter(post => post.title.toLowerCase().includes(search.toLowerCase()) || post.content.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'newest') {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }
    });

  if (loading) {
    return <div className="loading">Loading posts...</div>;
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <h1 className="page-title" style={{ marginBottom: 0 }}>Latest Blog Posts</h1>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <input 
            type="text" 
            placeholder="🔎 Search posts..." 
            className="form-control" 
            style={{ width: '250px' }}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <select 
            className="form-control" 
            style={{ width: 'auto' }}
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value="newest">📅 Newest First</option>
            <option value="oldest">📅 Oldest First</option>
          </select>
        </div>
      </div>

      {filteredAndSortedPosts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <div className="post-list">
          {filteredAndSortedPosts.map(post => (
            <PostCard key={post._id} post={post} onDelete={handleDelete} onLike={handleLike} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
