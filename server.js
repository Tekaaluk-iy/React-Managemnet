const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const fs = require(`fs`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();

const multer = require('multer');
const upload = multer({dest: './upload'});

app.get('/api/employees', (req,res) => {
   connection.query(
       "SELECT * FROM EMPLOYEE WHERE isDeleted = 0",
       (err, rows, fields) => {
           res.send(rows);
       }
   );
});

app.use('/image', express.static('./upload'));

app.post('/api/employees', upload.single('image'), (req, res) => {
    let sql = 'INSERT INTO EMPLOYEE VALUES (null, ?, ?, ?, ?, ?, now(), 0)';
    let image = './image/' + req.file.filename;
    let name = req.body.name;
    let number = req.body.number;
    let gender = req.body.gender;
    let job = req.body.job;
    let params = [image, number, name, gender, job];
    connection.query(sql, params, 
        (err, rows, fields) => {
            res.send(rows);
        });
});

app.delete('/api/employees/:id', (req, res) => {
    let sql = 'UPDATE EMPLOYEE SET isDeleted = 1 WHERE id = ?';
    let params = [req.params.id];
    connection.query(sql, params, 
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.listen(port, () => console.log(`Listening on port ${port}`));