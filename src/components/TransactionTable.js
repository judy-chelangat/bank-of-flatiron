import React from "react";

function TransactionTable({transactionDetails}){ //passing in the data as prop from parent component and destructuring it
console.log(transactionDetails); // Check if 'transactionsDetails' prop is received correctly 

return(
    <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Category</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      {transactionDetails.map((transaction) => (
        <tr key={transaction.id}>
          <td>{transaction.date}</td>
          <td>{transaction.description}</td>
          <td>{transaction.category}</td>
          <td>{transaction.amount}</td>
        </tr>
      ))}
    </tbody>
  </table>
);


   

}

export default TransactionTable;





// As a user, I can:See a table of all transactions.
//Fill out and submit the form to add a new transaction.
// This should add the new transaction to the table *the new transaction does not have to be persisted to the backend*
//Filter transactions by typing into the search bar.
// Only transactions with a description matching the search term should be shown in the transactions table.
// i need to fetch the data from local server and then map through each data and display it 