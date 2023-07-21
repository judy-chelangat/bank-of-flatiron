import React from 'react'
import { useState } from 'react'

function Form({details}) {
    //setting the states
    const [category,setCategory]=useState("")
    const [amount,setAmount]=useState("")
    const [description,setDescription]=useState("")
    const [date,setDate]=useState("")
    const [transactions, setTransactions] = useState([details]);//state for the initial data
    
    //function to handle the submittion of the form
    function handleSubmit(e){
        e.preventDefault()
        const formData={ //an object to hold the new inputs
            category:category,
            amount:amount,
            description:description,
            date:date
        }
        const dataArray = [...transactions, formData]; //using the spread operator tocreate a new array
        setTransactions(dataArray)
        setAmount("")
        setCategory("")
        setDate("")
        setDescription("") //after the form issubmitted I want to reset the inputs by using states
        
    }

    // function to handle the changes when a user types in te input
    function handleCategoryChange(event) {
        setCategory(event.target.value);
      }
    
      function handleAmountChange(event) {
        setAmount(event.target.value);
      }
      function handleDescriptionChange(event) {
        setDescription(event.target.value);
      }
    
      function handleDateChange(event) {
        setDate(event.target.value);
      }
      // using map to iterate over the new data and display it on the dom
      const listOfSubmissions = transactions.map((data) => {
        return (
            <table>
            <tbody>
                <tr key={data.id}>
                     <td>{data.category}</td>
                     <td>{data.description}</td>
                     <td>{data.amount}</td>
                     <td>{data.date}</td>
                </tr>
            </tbody>
          </table>
        );
      });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleCategoryChange} placeholder='category'/>
        <input onChange={handleAmountChange}  placeholder='Amount'/>
        <input onChange={handleDescriptionChange} placeholder='description'/>
        <input onChange={handleDateChange} placeholder='date'/>
        <button type="submit">Submit</button>
      </form>
      {listOfSubmissions}
    </div>
  )
}

export default Form;
// Fill out and submit the form to add a new transaction.
// This should add the new transaction to the table *the new transaction does not have to be persisted to the backend*