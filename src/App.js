import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
 
  const DUMMY_EXPENSES = [
    {id:"e1", title:"Car Insurance", amount:265.54, date: new Date(2021, 2, 28)},
    {id:"e2", title:"Car Insuranc", amount:264.54, date: new Date(2021, 2, 27)},
    {id:"e3", title:"Car Insuran", amount:263.54, date: new Date(2021, 2, 26)},
    {id:"e4", title:"Car Insura", amount:262.54, date: new Date(2021, 2, 25)},
  ];
  
  const[expenses,setExpenses ] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense =>{
    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div >
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses expenses= {expenses}/>
    </div>
  );
}

export default App;
