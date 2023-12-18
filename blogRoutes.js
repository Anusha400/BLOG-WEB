// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Get all posts
router.get('/', async (req, res) => {
  const posts = await Post.find().sort({ date: -1 });
  res.render('index', { posts });
});

// Get a specific post
router.get('/post/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', { post });
});

// Create a new post
router.post('/new', async (req, res) => {
  const { title, content } = req.body;
  const post = new Post({ title, content });
  await post.save();
  res.redirect('/');
});

module.exports = router;
