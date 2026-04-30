const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  getPostById,
  createPost,
  deletePost,
  updatePost,
  likePost
} = require('../controllers/blogController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getAllPosts).post(protect, createPost);
router.route('/:id').get(getPostById).delete(protect, deletePost).put(protect, updatePost);
router.route('/:id/like').put(likePost);

module.exports = router;
