import React from 'react'
import { useState } from 'react'

function Form({addTransaction}) {
    //setting the states
    const [category,setCategory]=useState("")
    const [amount,setAmount]=useState("")
    const [description,setDescription]=useState("")
    const [date,setDate]=useState("")
   
    //function to handle the submittion of the form
    function handleSubmit(e){
        e.preventDefault()
        const newTransaction ={ //an object to hold the new inputs
            id: Date.now(), // Generate a unique id using the current timestamp
            category: category,
            category:category,
            amount:amount,
            description:description,
            date:date
        }
        addTransaction(newTransaction); //Call the addTransaction function passed from the App component to add the new transaction.
        setAmount("")
        setCategory("")
        setDate("")
        setDescription("") //after the form issubmitted I want to reset the inputs by using states
        
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={ e => setCategory(e.target.value)} placeholder='category' value={category}/>
        <input onChange={ e => setAmount(e.target.value)}  placeholder='Amount' value={amount}/>
        <input onChange={ e => setDescription(e.target.value)} placeholder='description' value={description}/>
        <input onChange={ e => setDate(e.target.value)} placeholder='date' value={date}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form;
// Fill out and submit the form to add a new transaction.
// This should add the new transaction to the table *the new transaction does not have to be persisted to the backend*