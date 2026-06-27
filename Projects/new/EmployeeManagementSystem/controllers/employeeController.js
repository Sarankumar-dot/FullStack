const db = require("../config/db");

const getEmployees = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM students");

    res.status(200).json(rows);
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

const getEmployeesById = async (req,res) => {
    const id = req.params.id;

    const query = "select * from students where id = ?";

    try{
        const [rows] = await db.query(query,[id]);

        if(rows.length === 0){
            return res.status(404).json({
                message : "employee not found"
            })
        }else{
            res.status(200).json(rows[0]);
        }
        
    }catch(e){
        res.status(500).json({
            message : e.message
        })
    }
}

const addEmployee = async (req,res) => {
    console.log("iam inside")
    const {name,email} = req.body;

    if(!name || !email){
        res.status(400).json({
            message : "name and email required"
        })
    }

    const checkIfAlreadyExists = `select * from students where email = ?`;

    try{
        const [rows] = await db.query(checkIfAlreadyExists,[email]);

        if(rows.length > 0){
            return res.status(409).json({
              message: "email already exists",
            });
        }
        
    }catch(e){
        return res.status(500).json({
            message : e.message
        })
    }

    const query = `insert into students(name,email) values(?,?)`;

    try{
        const [result] = await db.query(query,[name,email]);

        if(result.affectedRows == 1){
            res.status(201).json({
                message : "employee inserted",
                insertedId : result.insertId
            })
        }

    }catch(e){
        res.status(400).json({
            message : "insertion failed"
        })
    }
    
}

const uploadImage = async (req, res) => {
  try {
    res.status(200).json({
      message: "File uploaded",
      file: req.file.filename,
    });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

const uploadEmpImage = async (req,res) => {

    const id = req.params.id;
    const filename = req.file.filename;
    try{
        const query = 'update students set image = ? where id = ?';

        const [rows] = await db.query(query,[filename,id]);

        if(rows.affectedRows > 0){
            res.status(200).json({
                message : "file uploaded and stored in db"
            })
        }
    }catch(e){
        res.json({
            message : e.message
        })
    }
}

module.exports = {
  getEmployees,getEmployeesById,addEmployee,uploadImage,uploadEmpImage
};
