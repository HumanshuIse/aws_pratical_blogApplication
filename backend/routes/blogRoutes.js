const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  getPostById,
  createPost,
  deletePost,
} = require('../controllers/blogController');

router.route('/').get(getAllPosts).post(createPost);
router.route('/:id').get(getPostById).delete(deletePost);

module.exports = router;
