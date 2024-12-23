const express = require('express');
const expenseRouter = require('./expenses/expenses.router');
const { readFile, writeFile } = require('./utils/utils');
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/expenses', expenseRouter);

app.get('/expense-list', async (req, res) => {
  const expenses = await readFile('expenses.json', true);
  res.render('pages/expensesList.ejs', { expenses });
});

app.get('/create-expense', (req, res) => {
  res.render('pages/expensesCreate.ejs');
});

app.get('/', (req, res) => {
  res.send('hellow world');
});

app.listen(3001, () => {
  console.log('server runnig on http://localhost:3001');
});
