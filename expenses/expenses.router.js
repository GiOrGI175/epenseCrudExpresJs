const { Router } = require('express');

const {
  getAllExpenses,
  createExpense,
  deleteExpenseByID,
  getExpenseById,
  updateExpenseById,
} = require('./expenses.service');

const expensesRouter = Router();

expensesRouter.get('/', getAllExpenses);
expensesRouter.get('/:id', getExpenseById);
expensesRouter.post('/', createExpense);
expensesRouter.delete('/:id', deleteExpenseByID);
expensesRouter.put('/:id', updateExpenseById);

module.exports = expensesRouter;
