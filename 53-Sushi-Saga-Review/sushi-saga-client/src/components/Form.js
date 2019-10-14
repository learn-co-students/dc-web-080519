import React from 'react'

const MoneyForm = (props) => {
  return(
    <div>
      <form onSubmit={props.handleForm}>
        <p>Git Money</p>
        <input type="number" placeholder="Enter Amt"/>
        <input type="submit" text="Submit"/>
      </form>
    </div>
  )
}

export default MoneyForm
