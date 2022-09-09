import React from 'react'

const Balance = ({ balance }) => {
  return (
    <div>
      <h2 className="balance">YOUR BALANCE</h2>
      <h2
        className="balance balance-amount"
        style={balance < 0 ? { color: 'red' } : { color: 'green' }}
      >
        ${balance === 0 ? '0.00' : balance}
      </h2>
    </div>
  )
}

export default Balance
