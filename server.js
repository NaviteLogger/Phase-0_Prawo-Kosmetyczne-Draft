const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve MainPage.html as the default file for the root URL
app.get('/', (req, res) => {
    console.log('MainPage.html requested');
    res.sendFile(path.join(__dirname, 'public', 'pages', 'MainPage.html'));
});

const port = 5000; // Choose any port you prefer

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
