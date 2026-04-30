const Blog = require('../models/Blog');

// @desc    Get all posts
// @route   GET /api/posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Blog.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single post
// @route   GET /api/posts/:id
const getPostById = async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a post
// @route   POST /api/posts
const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    // Fallback to req.body.author for backward compatibility if needed, else req.user.username
    const author = req.body.author || req.user.username;

    const post = new Blog({
      title,
      content,
      author,
    });

    const createdPost = await post.save();
    res.status(201).json(createdPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a post
// @route   DELETE /api/posts/:id
const deletePost = async (req, res) => {
  try {
    const post = await Blog.findByIdAndDelete(req.params.id);
    
    if (post) {
      res.json({ message: 'Post removed' });
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a post
// @route   PUT /api/posts/:id
const updatePost = async (req, res) => {
  try {
    const post = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Like a post
// @route   PUT /api/posts/:id/like
const likePost = async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);
    if (post) {
      post.likes += 1;
      await post.save();
      res.json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  deletePost,
  updatePost,
  likePost,
};
