const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Strona w produkcji - wkrótce dostępna!');
});

const port = 5000; // Choose any port you prefer

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
