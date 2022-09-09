import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import Transactions from './components/Transactions'
import AddTransaction from './components/AddTransaction'
import { useState } from 'react'

function App() {
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [balance, setBalance] = useState(0)
  const [transactions, setTransactions] = useState([])

  // {
  //   id: 1,
  //   description: 'Cash',
  //   amount: 500,
  // },
  // {
  //   id: 2,
  //   description: 'iPhone',
  //   amount: -500,
  // },

  function getTextAmount(description, amount) {
    amount = parseInt(amount)

    setBalance(balance + amount)

    const newTransaction = {
      id: transactions.length + 1,
      description: description,
      amount: amount,
    }

    setTransactions([...transactions, newTransaction])

    if (amount > 0) {
      setIncome(income + amount)
    } else {
      setExpense(expense + amount)
    }
  }

  return (
    <div className="container">
      <Header />
      <Balance balance={balance} />
      <IncomeExpense income={income} expense={expense} />
      <Transactions transactions={transactions} />
      <AddTransaction onAdd={getTextAmount} />
    </div>
  )
}

export default App
