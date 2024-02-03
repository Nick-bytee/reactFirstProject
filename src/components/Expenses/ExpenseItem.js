import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";

const ExpenseItem = (expense) => {
  const [title, setTitle] = useState(expense.title);
  const [amount, setAmount] = useState(expense.amount);

  console.log(amount);

  const amountClickHandler = () => {
    setAmount(100);
  };

  const clickHandler = () => {
    setTitle("Updated");
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={expense.date}></ExpenseDate>
      <ExpenseDetails
        title={title}
        location={expense.location}
        amount={amount}
      ></ExpenseDetails>
      <button onClick={amountClickHandler}>change expense</button>
      <button onClick={clickHandler}>Update</button>
    </div>
  );
};

export default ExpenseItem;
