import React from 'react'

const Transaction = ({ description, amount, sign }) => {
  return (
    <div
      className={amount > 0 ? 'transaction positive' : 'transaction negative'}
    >
      <p>{description}</p>
      <p>
        {sign}
        {amount}
      </p>
    </div>
  )
}

export default Transaction
