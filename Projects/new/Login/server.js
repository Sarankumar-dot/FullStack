const exp = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = exp();

app.use(cors());
app.use(exp.json());


const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "7639",
    database : "studentdb"
})

db.connect((err) => {
    if(err){
        console.log(err.message)
    }else{
        console.log("db connected")
    }
})

app.post('/checkUser',(req,res) => {
    const {email,password} = req.body;

    const query = "select * from login where email = ? and password = ?";

    db.query(query,[email,password],(err,result) => {
        if(err){
            return res.json({
                message : err.message
            })
        }

        if(result.length > 0){
            return res.json({
                message : "Login successful"
            })
        }else{
            return res.json({
                message : "Login unsuccessful"
            })
        }
    })
})

app.listen('3000','localhost',() => {
    console.log('server is listening')
})