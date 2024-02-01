import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    console.log(enteredTitle, enteredAmount, enteredDate);
  };

  return (
    <div>
      <form onSubmit={clickHandler}>
        <div className="expenseForm">
          <div className="expenseinput">
            <input
              className="titleInput"
              type="text"
              placeholder="enter title"
              onChange={titleHandler}
            />
          </div>
          <div className="expenseinput">
            <input
              type="text"
              placeholder="enter amount"
              onChange={amountHandler}
            />
          </div>
          <div className="expenseinput">
            <input
              type="date"
              placeholder="enter date"
              onChange={dateHandler}
            />
          </div>
          <div>
            <button className="submitButton">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
