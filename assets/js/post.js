// post.js
const express = require('express');
const app = express();

// Create a post or comment
app.post('/post', (req, res) => {
  const { title, content, email } = req.body;
  const guestId = generateGuestId(req);
  const post = new Post({ title, content, guestId, email });
  post.save((err, post) => {
    if (err) {
      res.status(400).send({ message: 'Error creating post' });
    } else {
      res.send({ message: 'Post created successfully' });
    }
  });
});