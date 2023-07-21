import React from "react";
import { useEffect,useState } from "react";


function TransactionTable(){ //passing in the data as prop from parent component 

return(
    <p>{description}</p>
)
}

export default TransactionTable;





// As a user, I can:See a table of all transactions.
//Fill out and submit the form to add a new transaction.
// This should add the new transaction to the table *the new transaction does not have to be persisted to the backend*
//Filter transactions by typing into the search bar.
// Only transactions with a description matching the search term should be shown in the transactions table.
// i need to fetch the data from local server and then map through each data and display it 