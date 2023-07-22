import logo from '../logo.svg';
import '../App.css';
import TransactionTable from './TransactionTable';
import { useEffect,useState } from "react";
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [transactions, setTransactions] = useState([]); 
  // //using the useState hook to store the transactions in the component's state.
  // fetching the data to display using fetch API
useEffect(
  ()=>{
      fetch("http://localhost:3000/transactions")
      .then(resp=>resp.json())
      .then(data=>{
                 setTransactions(data)
                 console.log(data)
      })
  },[]
)
// function to add the nw transaction to the list
function addTransaction(newTransaction) {
  setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
}

return(
  <div>
  <Form addTransaction={addTransaction}/> 
  <TransactionTable transactionDetails={transactions} />
  
  </div>
)
}
//passing in the addtransaction function as a prop

//passing the data as a prop to transaction table
export default App;
