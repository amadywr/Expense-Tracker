import React from 'react'
import Transaction from './Transaction'

const Transactions = ({ transactions }) => {
  return (
    <div className="transactions">
      <h2>History</h2>
      <hr />
      {transactions.length > 0
        ? transactions.map((transaction) => (
            <Transaction
              key={transaction.id}
              description={transaction.description}
              amount={transaction.amount}
              sign={transaction.amount > 0 && '+'}
            />
          ))
        : 'No transaction to show'}
    </div>
  )
}

export default Transactions
