const db = require('../db');

// get all
const getAllPosts = async () => {
  const result = await db.query(`
    SELECT 
      posts.*,
      authors.name AS author_name,
      authors.email
    FROM posts
    JOIN authors ON posts.author_id = authors.id
    ORDER BY posts.id
  `);

  return result.rows;
};

// get by author
const getPostsByAuthor = async (authorId) => {
  const result = await db.query(
    `SELECT p.*, a.name as author_name, a.email
     FROM posts p
     JOIN authors a ON p.author_id = a.id
     WHERE a.id = $1`,
    [authorId]
  );
  return result.rows;
};

// get by id
const getPostById = async (id) => {
  const result = await db.query(
    'SELECT * FROM posts WHERE id = $1',
    [id]
  );
  return result.rows[0];
};


// create
const createPost = async (title, content, author_id, published) => {
  const result = await db.query(
    `INSERT INTO posts (title, content, author_id, published)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [title, content, author_id, published]
  );
  return result.rows[0];
};
  // update 
const updatePost = async (id, title, content, author_id, published) => {
  const result = await db.query(
    `UPDATE posts
     SET title = $1, content = $2, author_id = $3, published = $4
     WHERE id = $5
     RETURNING *`,
    [title, content, author_id, published, id]
  );

  return result.rows[0];
};
  // delete
const deletePost = async (id) => {
  const result = await db.query(
    'DELETE FROM posts WHERE id = $1 RETURNING *',
    [id]
  );

  return result.rows[0];
};


module.exports = {
  getAllPosts,
  getPostById,
  getPostsByAuthor,
  createPost,
  updatePost,
  deletePost,
};