import React from "react";
import { useState } from "react";

function TransactionTable({transactionDetails}){ //passing in the data as prop from parent component and destructuring it
console.log(transactionDetails); // Check if 'transactionsDetails' prop is received correctly 

const [searchTerm,setSearchTerm]=useState("") // state to hold the users search input

// Function to filter transactions based on the search term
const filteredTransactions= transactionDetails.filter((transaction)=>{
return (
  transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) 
  )//checking to see if the description includes search term
})
// function handleClick(){

// }
return(
  <div>
   <input placeholder="Type to search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
   {/* <button onClick={handleClick} >Search</button> */}

    <table>
    <thead>
      <tr>
        <th>Category</th>
        <th>Description</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      
    {searchTerm !== ""
            ? filteredTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.category}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.date}</td>
                </tr>
              ))
            : transactionDetails.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.category}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.date}</td>
                </tr>
              ))}
    </tbody>
  </table>
  </div>
);

 // If search term is not empty, show filtered transactions
     // If search term is empty, show all transactions

}

export default TransactionTable;





// As a user, I can:See a table of all transactions.
//Fill out and submit the form to add a new transaction.
// This should add the new transaction to the table *the new transaction does not have to be persisted to the backend*
//Filter transactions by typing into the search bar.
// Only transactions with a description matching the search term should be shown in the transactions table.
// i need to fetch the data from local server and then map through each data and display it 