const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'practice'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL server');
});

// Define a route to fetch data
app.get('/commiti/members', (req, res) => {
  const query = 'SELECT * FROM mobisoft';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

// Update data in the database
// app.put('/update/:id', (req, res) => {
//     const id = req.params.id;
//     const newData = req.body.newData;
  
//     const sql = 'UPDATE mobisoft SET name = ? WHERE location = ?';
//     db.query(sql, [newData, id], (err, result) => {
//       if (err) {
//         console.error('Error updating data:', err);
//         res.status(500).json({ error: 'Error updating data' });
//         return;
//       }
//       console.log('Data updated successfully');
//       res.json({ message: 'Data updated successfully' });
//     });
//   });


// Start the server
app.listen(port,'0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
