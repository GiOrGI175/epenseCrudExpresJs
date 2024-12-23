const { readFile, writeFile } = require('../utils/utils');

const getAllExpenses = async (req, res) => {
  const expenses = await readFile('expenses.jason', true);
  res.json = res.json(expenses);
};

module.exports = { getAllExpenses };
