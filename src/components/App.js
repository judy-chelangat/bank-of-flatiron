import logo from '../logo.svg';
import '../App.css';
import TransactionTable from './TransactionTable';
import { useEffect,useState } from "react";


function App() {
  const [transactions, setTransactions] = useState([]); //using the useState hook to store the transactions in the component's state.
  // fetching the data to display using fetch API
useEffect(
  ()=>{
      fetch("http://localhost:3000/transactions")
      .then(resp=>resp.json())
      .then(data=>{
        console.log(data)
          setTransactions(data.transactions)
      })
  },[]
)

return(
  <TransactionTable transactions={transactions}/> //passing the data as a prop to transaction table
)
}

export default App;
