// Create Web Server
const express = require('express');
const app = express();
const port = 3000;

// Require the comments module
const comments = require('./comments');

// Use the comments module
app.use('/comments', comments);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Path: comments.js
// Create a new router
const express = require('express');
const router = express.Router();

// Define the route for getting all comments
router.get('/', (req, res) => {
  res.json(comments);
});

// Define the route for getting a single comment
router.get('/:id', (req, res) => {
  const comment = comments.find((c) => c.id === parseInt(req.params.id));
  if (!comment) {
    return res.status(404).send('The comment with the given ID was not found.');
  }
  res.json(comment);
});

// Export the router
module.exports = router;

// Path: comments.js
// Create an array of comments
const comments = [
  { id: 1, author: 'John Doe', body: 'Hello, World!' },
  { id: 2, author: 'Jane Doe', body: 'Hi, there!' },
  { id: 3, author: 'Alice', body: 'Howdy!' },
];

// Export the comments array
module.exports = comments;

// Path: comments.js
// Create a new comment
router.post('/', (req, res) => {
    const comment = {
        id: comments.length + 1,
    };
}); // Add the missing closing curly brace here
