const express = require('express');
const router = express.Router();

const post_controller = require('../controllers/postController');

// Get all posts.
router.get('/', post_controller.getAllPosts);

// Submit a new post.
router.post('/', post_controller.savePost);

// Get post by id.
router.get('/:id', post_controller.getPostById);

// Delete a post.
router.delete('/:id', post_controller.deletePost);

// Update a post.
router.patch('/:id', post_controller.updatePost);

module.exports = router;
