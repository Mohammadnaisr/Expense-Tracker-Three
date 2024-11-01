import React, { useState } from 'react';

const App = () => {
  const [balance, setBalance] = useState(0);
  const [incomeHistory, setIncomeHistory] = useState([]);
  const [expenseHistory, setExpenseHistory] = useState([]);
  const [incomeAmount, setIncomeAmount] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('');

  const addIncome = () => {
    const amount = parseFloat(incomeAmount);
    if (amount > 0) {
      setBalance(balance + amount);
      setIncomeHistory([...incomeHistory, amount]);
      setIncomeAmount('');
    }
  };

  const addExpense = () => {
    const amount = parseFloat(expenseAmount);
    if (amount > 0 && amount <= balance) {
      setBalance(balance - amount);
      setExpenseHistory([
        ...expenseHistory,
        { amount, category: expenseCategory },
      ]);
      setExpenseAmount('');
      setExpenseCategory('');
    } else {
      alert('Insufficient balance or invalid amount');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Expense Tracker</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {/* Balance Section */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold">Balance</h2>
          <p className="text-3xl text-green-600">${balance.toFixed(2)}</p>
        </div>

        {/* Add Income Section */}
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Add Income</h3>
          <input
            type="number"
            value={incomeAmount}
            onChange={e => setIncomeAmount(e.target.value)}
            placeholder="Income Amount"
            className="w-full border border-gray-300 rounded p-2 mb-2"
          />
          <button
            onClick={addIncome}
            className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
          >
            Add Income
          </button>
        </div>

        {/* Add Expense Section */}
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Add Expense</h3>
          <input
            type="number"
            value={expenseAmount}
            onChange={e => setExpenseAmount(e.target.value)}
            placeholder="Expense Amount"
            className="w-full border border-gray-300 rounded p-2 mb-2"
          />
          <input
            type="text"
            value={expenseCategory}
            onChange={e => setExpenseCategory(e.target.value)}
            placeholder="Expense Category"
            className="w-full border border-gray-300 rounded p-2 mb-2"
          />
          <button
            onClick={addExpense}
            className="w-full bg-red-500 text-white rounded p-2 hover:bg-red-600"
          >
            Add Expense
          </button>
        </div>

        {/* Income History */}
        <div className="mb-4">
          <h3 className="text-lg font-medium">Income History</h3>
          <ul className="list-disc pl-5">
            {incomeHistory.map((income, index) => (
              <li key={index} className="text-green-600">
                +${income.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>

        {/* Expense History */}
        <div>
          <h3 className="text-lg font-medium">Expense History</h3>
          <ul className="list-disc pl-5">
            {expenseHistory.map((expense, index) => (
              <li key={index} className="text-red-600">
                -${expense.amount.toFixed(2)} - {expense.category}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
