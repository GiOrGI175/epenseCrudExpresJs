const { Router } = require('express');

const { getAllExpenses, createExpense } = require('./expenses.service');

const expensesRouter = Router();

expensesRouter.get('/', getAllExpenses);
expensesRouter.post('/', createExpense);

module.exports = expensesRouter;
