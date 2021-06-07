import React,{useState} from 'react'
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

 const NewExpense = (props) => {
    const [showForm,setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
    const startEditing = () => {
        setShowForm(true);
    }
    const stopEditing = () => {
        setShowForm(false);
    }
    let expenseForm = (
        <button type='button' onClick = {startEditing}>Add New Expense</button>
      )
    if (showForm === true) {
        expenseForm = <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onStopEditing={stopEditing} />
    }
    return (
        <div className="new-expense" >
            {expenseForm}
        </div>
    )
}
export default NewExpense;