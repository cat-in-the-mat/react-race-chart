const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.static('static'))

app.listen(3000, () => {
  console.log('server listening');
}); 