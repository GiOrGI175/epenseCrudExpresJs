const { Router } = require('express');

const { getAllExpenses } = require('./expenses.service');

const expensesRouter = Router();

expensesRouter.get('/', getAllExpenses);

module.exports = expensesRouter;
