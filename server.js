const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'amittad135711',
    database: 'eccom'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

// API to get data by primary key
app.get('/data/:id', (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM user WHERE id = ?';

    db.query(query, [id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
