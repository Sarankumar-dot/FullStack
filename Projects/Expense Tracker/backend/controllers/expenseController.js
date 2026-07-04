const db = require('../config/config');

const createExpense = async (req, res) => {
  const { title, amount, category, expense_date } = req.body;
  const user_id = req.user.id;

  if (!title || !amount || !category || !expense_date) {
    return res.status(400).json({
      success: false,
      message: 'bad request check title,amount,category,expense',
    });
  }

  try {
    const query = `insert into expenses(user_id,title,amount,category,expense_date) values(?,?,?,?,?)`;

    const [rows] = await db.query(query, [user_id, title, amount, category, expense_date]);

    if (rows.affectedRows > 0) {
      return res.status(201).json({
        success: true,
        message: 'expense added',
      });
    } else {
      return res.status(400).json({
        success: false,
        message: 'expense could not be added',
      });
    }
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

const getExpense = async (req, res) => {
  const user_id = req.user.id;

  try {
    const getQuery = `select id,title,amount,category,expense_date from expenses where user_id = ? order by expense_date desc`;

    const [rows] = await db.query(getQuery, [user_id]);

    if (rows.length == 0) {
      return res.status(200).json({
        success: true,
        expenses: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Data sent',
      expenses: rows,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

module.exports = { createExpense, getExpense };
