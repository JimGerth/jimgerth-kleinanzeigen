const mysql = require('mysql');
const connection = mysql.createConnection({
  host               : '192.168.64.2',
  user               : 'admin',
  password           : 'u7xDHztBzLZEsBxr',
  database           : 'KLEINANZEIGEN',
  multipleStatements : true
});
connection.connect(err => {
  if (err) {
    throw err;
  }
});

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static('public'));

// app.get()

app.listen(PORT);
