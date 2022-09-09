import React from 'react'

const IncomeExpense = ({ income, expense }) => {
  return (
    <div className="income-expense">
      <div>
        <h3>INCOME</h3>
        <p className="income">${income > 0 ? income : '0.00'}</p>
      </div>
      <div></div>
      <div>
        <h3>EXPENSE</h3>
        <p className="expense">${expense < 0 ? expense : '0.00'}</p>
      </div>
    </div>
  )
}

export default IncomeExpense
