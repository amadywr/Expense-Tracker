import React from 'react'
import { useState } from 'react'

const AddTransaction = ({ onAdd }) => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')

  function onSubmit(e) {
    e.preventDefault()

    if (!description || !amount || amount === 0) {
      alert('please enter text and an amount of over or under 0')
    } else {
      onAdd(description, amount)
      setDescription('')
      setAmount('')
    }
  }

  return (
    <div className="add-transaction">
      <h2>Add new transaction</h2>
      <hr />
      <form className="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <input type="submit" value={'Add Transaction'} />
      </form>
    </div>
  )
}

export default AddTransaction
