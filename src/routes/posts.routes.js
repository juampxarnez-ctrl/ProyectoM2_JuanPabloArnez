const express = require('express');
const router = express.Router();
const postsService = require('../services/posts.service');

// get all
router.get('/', async (req, res) => {
  try {
    const posts = await postsService.getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// get by author
router.get('/author/:authorId', async (req, res) => {
  try {
    const posts = await postsService.getPostsByAuthor(req.params.authorId);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// get by id
router.get('/:id', async (req, res) => {
  try {
    const post = await postsService.getPostById(req.params.id);

    if (!post) {
      return res.status(404).json({ error: 'Post no encontrado' });
    }

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// post
router.post('/', async (req, res) => {
  try {
    const { title, content, author_id, published } = req.body;

    if (!title || !content || !author_id) {
      return res.status(400).json({ error: 'faltan campos' });
    }

    const post = await postsService.createPost(
      title,
      content,
      author_id,
      published
    );

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// put
router.put('/:id', async (req, res) => {
  try {
    const { title, content, author_id, published } = req.body;

    if (!title || !content || !author_id) {
      return res.status(400).json({ error: 'faltan campos' });
    }

    const updatedPost = await postsService.updatePost(
      req.params.id,
      title,
      content,
      author_id,
      published
    );

    if (!updatedPost) {
      return res.status(404).json({ error: 'Post no encontrado' });
    }

    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// delete
router.delete('/:id', async (req, res) => {
  try {
    const deletedPost = await postsService.deletePost(req.params.id);

    if (!deletedPost) {
      return res.status(404).json({ error: 'Post no encontrado' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;