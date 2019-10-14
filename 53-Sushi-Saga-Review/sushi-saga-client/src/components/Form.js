import React from 'react'

const MoneyForm = ({handleForm}) => {
  return(
    <div>
      <form onSubmit={handleForm}>
        <p>Git Money</p>
        <input type="number" placeholder="Enter Amt"/>
        <input type="submit" text="Submit"/>
      </form>
    </div>
  )
}

export default MoneyForm
