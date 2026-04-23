const express = require('express');
const router = express.Router();

const authorsService = require('../services/authors.service');

// get-all
router.get('/', async (req, res) => {
  try {
    const authors = await authorsService.getAllAuthors();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// get-by-id
router.get('/:id', async (req, res) => {
  try {
    const author = await authorsService.getAuthorById(req.params.id);

    if (!author) {
      return res.status(404).json({ error: 'Author no encontrado' });
    }

    res.json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// create
router.post('/', async (req, res) => {
  try {
    const { name, email, bio } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'name y email son obligatorios' });
    }

    const newAuthor = await authorsService.createAuthor(name, email, bio);

    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// update
router.put('/:id', async (req, res) => {
  try {
    const { name, email, bio } = req.body;

    const updated = await authorsService.updateAuthor(
      req.params.id,
      name,
      email,
      bio
    );

    if (!updated) {
      return res.status(404).json({ error: 'Author no encontrado' });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// delete
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await authorsService.deleteAuthor(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Author no encontrado' });
    }
    res.status(204).send()
  } catch (error) 
  
  {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;