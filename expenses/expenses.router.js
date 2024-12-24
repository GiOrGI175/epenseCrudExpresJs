const { Router } = require('express');

const {
  getAllExpenses,
  createExpense,
  deleteExpenseByID,
  getExpenseById,
  updateExpenseById,
} = require('./expenses.service');
const confrimDeleteMiddleware = require('../middlewares/confrimDelete');
const checkRequiredFields = require('../middlewares/chechRequierdFilds');

const expensesRouter = Router();

expensesRouter.get('/', getAllExpenses);
expensesRouter.get('/:id', getExpenseById);
expensesRouter.post('/', checkRequiredFields, createExpense);
expensesRouter.delete('/:id', confrimDeleteMiddleware, deleteExpenseByID);
expensesRouter.put('/:id', updateExpenseById);

module.exports = expensesRouter;
