const express = require('express');
const app = express();
const port = 8080;

const users = require('./users');
const blogPosts = require('./blogPosts');
const comments = require('./comments');

app.use(express.json());
app.get('/user/summary/:userId', (req, res) => {
  const userId = req.params.userId;
  const user = users.find(user => user.id === userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const numberOfPosts = blogPosts.filter(post => post.authorId === userId).length;
  const numberOfComments = comments.filter(comment => comment.userId === userId).length;

  const userSummary = {
    id: user.id,
    username: user.username,
    email: user.email,
    fullName: user.fullName,
    'Number of Post': numberOfPosts,
    'Number of comments': numberOfComments,
  };

  res.json(userSummary);
});

app.get('/post/:postId/comments', (req, res) => {
  const postId = req.params.postId;
  const postComments = comments.filter(comment => comment.postId === postId);

  if (postComments.length === 0) {
    return res.status(404).json({ message: `No comments found for post ID: ${postId}` });
  }

  const formattedComments = postComments.map(comment => {
    const commentator = users.find(user => user.id === comment.userId);
    return {
      commentator: commentator ? commentator.fullName : 'Unknown User',
      comment: comment.content,
    };
  });

  res.json(formattedComments);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

