// Importing the express module
const express = require('express');

// Creating an instance of the express application
const app = express();

// Setting the port number to 3000
const port = 3000;

// Setting up a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Starting the server and listening on the specified port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});