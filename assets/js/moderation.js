// moderation.js
const express = require('express');
const app = express();

// Approve or reject a post or comment
app.put('/post/:id/approve', (req, res) => {
  const postId = req.params.id;
  Post.findByIdAndUpdate(postId, { approved: true }, (err, post) => {
    if (err) {
      res.status(400).send({ message: 'Error approving post' });
    } else {
      res.send({ message: 'Post approved successfully' });
    }
  });
});