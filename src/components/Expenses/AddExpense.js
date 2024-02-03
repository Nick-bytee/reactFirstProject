import React from "react";
import ExpenseForm from "./ExpenseForm";

const AddExpense = (props) => {
  const expenseDataHandler = (expense) => {
    const newUserData = { ...expense, id: Math.random.toString };
    props.getExpenseData(newUserData);
  };

  return (
    <div>
      <ExpenseForm onSaveExpenseData={expenseDataHandler} />-
    </div>
  );
};

export default AddExpense;
