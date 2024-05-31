// Create Web Server
// 1. Create a web server using Express
// 2. Create a route for POST /comments
// 3. Parse the incoming JSON data
// 4. Store the incoming JSON data in an array
// 5. Respond with the stored data
// 6. Start the server and listen on port 3000
// 7. Test the route using Postman

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let comments = [];

app.post('/comments', (req, res) => {
    let newComment = req.body;
    comments.push(newComment);
    res.json(comments);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Test the route using Postman
// 1. Open Postman
// 2. Select POST method
// 3. Enter http://localhost:3000/comments
// 4. Select Body
// 5. Select raw
// 6. Select JSON
// 7. Enter the following JSON data
// {
//     "name": "Alice",
//     "email": "