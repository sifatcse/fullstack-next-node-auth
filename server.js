// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse JSON body
app.use(bodyParser.json());

// API endpoint to handle signup requests
app.post('/api/signup', (req, res) => {
  const { username, email, password } = req.body;

  // Do something with the data, such as create a new user in your database
  // ...

  // Send a response to the client
  res.json({ message: 'Signup successful!' });
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
