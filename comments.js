//Create Web Server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/comments', function(req, res) {
    var comment = req.body.comment;
    console.log(comment);
    fs.appendFile('comments.txt', comment + '\n', function(err) {
        if (err) {
            console.error(err);
            res.status(500).send('Error saving your comment');
        } else {
            res.status(200).send('Comment saved');
        }
    });
});

app.get('/comments', function(req, res) {
    fs.readFile('comments.txt', 'utf8', function(err, data) {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading comments');
        } else {
            res.status(200).send(data);
        }
    });
});

app.listen(3000, function() {
    console.log('Server started');
});
//Run the server with node comments.js
//To test the server, you can use curl or Postman, or you can use the following HTML form:
/*
<!DOCTYPE html>
<html>
<head>
    <title>Comments</title>
</head>
<body>
    <form action="http://localhost:3000/comments" method="POST">
        <textarea name="comment"></textarea>
        <button type="submit">Submit</button>
    </form>
    <script>
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3000/comments', true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.body.innerHTML += '<pre>' + xhr.responseText + '</pre>';
            }
        };
    </script>
</body>
</html>
*/
//Save this code as comments.html and open it in your browser. You can submit comments and see them displayed on the page. 
//The comments are also saved to the comments.txt file. 
//You can open this file to see the comments that have been submitted to the server.