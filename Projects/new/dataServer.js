const exp = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = exp();

app.use(cors());
app.use(exp.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '7639',
  database: 'studentdb',
});

db.connect((err) => {
  if (err) {
    console.log('connection failed');
  } else {
    console.log('connection successful');
  }
});

app.get('/getStudentData', (req, res) => {
  const sql = 'SELECT * FROM login';

  db.query(sql, (err, result) => {
    res.send(result);
  });
});

app.put('/updateStudent', (req, res) => {
  const { studentId, email, password } = req.body;

  const updateSql = 'update login set email = ? , password = ? where id=?';

  db.query(updateSql, [email, password, studentId], (err, result) => {
    if (err) {
      return res.json({
        message: err.message,
      });
    } else {
      return res.json({
        message: 'update successful',
        success: true,
      });
    }
  });
});

app.post('/students', (req, res) => {
  const { email, password } = req.body;

  const checkSql = 'SELECT * FROM login WHERE email = ?';

  db.query(checkSql, [email], (err, result) => {
    if (err) {
      return res.json({
        message: 'Database error',
      });
    }

    if (result.length > 0) {
      return res.json({
        message: 'Email already exists',
      });
    }

    const insertSql = 'INSERT INTO login(email, password) VALUES(?, ?)';

    db.query(insertSql, [email, password], (err, result) => {
      if (err) {
        return res.json({
          message: 'Error inserting data',
        });
      }

      res.json({
        message: 'Inserted successfully',
      });
    });
  });
});

app.delete('/deleteStudent', (req, res) => {
  const { studentId } = req.body;

  const deleteQuery = 'delete from login where id = ?';

  db.query(deleteQuery, [studentId], (err, result) => {
    if (err) {
      res.json({
        message: err.message,
      });
    } else {
      res.json({
        message: 'delete successful',
      });
    }
  });
});

app.listen(3000, 'localhost', () => {
  console.log('listening');
});
