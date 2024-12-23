const { readFile, writeFile } = require('../utils/utils');

const getAllExpenses = async (req, res) => {
  const expenses = await readFile('expenses.json', true);
  res.json = res.json(expenses);
};

const createExpense = async (req, res) => {
  const { category, price } = req.body;
  if (!category || !price || !price < 0) {
    return res.status(400).json({ message: 'category and price is required' });
  }
  const expenses = await readFile('expenses.json', true);
  const lastId = expenses[expenses.length - 1]?.id || 0;
  const newExpense = {
    id: lastId + 1,
    category,
    price,
  };
  expenses.push(newExpense);
  await writeFile('expenses.json', expenses, true);
  res.status(201).json(newExpense);
};

module.exports = { getAllExpenses, createExpense };
