const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('static'));

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
}); 