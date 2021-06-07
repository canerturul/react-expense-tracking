import React,{useState} from 'react';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import Card from "../UI/Card";

export default function Expenses(props) {
  const [filteredYear,setFilteredYear] = useState('2021');
  
  const filterChangedHandler = selectedYear => {
    setFilteredYear(selectedYear);
    console.log(filteredExpenses);
  }
  let filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString()===filteredYear
  })

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangedFilter = {filterChangedHandler}/>
        <ExpensesChart expenses = {filteredExpenses} />
        <ExpensesList expenses = {filteredExpenses}/>
      </Card>

    </div>
  )
}
