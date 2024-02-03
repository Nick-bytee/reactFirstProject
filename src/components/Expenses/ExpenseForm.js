import React, { useState } from "react";
import "../css/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");
  const [enteredPlace, setPlace] = useState("");

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const placeHandler = (e) => {
    setPlace(e.target.value);
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      location: enteredPlace,
      date: new Date(enteredDate).toISOString().split("T")[0],
    };

    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    setPlace("");
  };

  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = (e) => {
    setShowForm(true);
  };

  const handleCancelButtonClick = () => {
    setShowForm(false);
  };

  let form = (
    <div>
      <form onSubmit={submitHandler}>
        <div className="expenseForm">
          <div className="expenseinput">
            <input
              className="titleInput"
              type="text"
              placeholder="enter title"
              value={enteredTitle}
              onChange={titleHandler}
            />
          </div>
          <div className="expenseinput">
            <input
              type="text"
              placeholder="enter amount"
              value={enteredAmount}
              onChange={amountHandler}
            />
          </div>
          <div className="expenseinput">
            <input
              type="text"
              placeholder="enter place"
              value={enteredPlace}
              onChange={placeHandler}
            />
          </div>
          <div className="expenseinput">
            <input
              type="date"
              placeholder="enter date"
              value={enteredDate}
              onChange={dateHandler}
            />
          </div>
          <div>
            <button
              type="button"
              className="submitButton"
              onClick={handleCancelButtonClick}
            >
              Cancel
            </button>
            <button type="submit" className="submitButton">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  if (!showForm) {
    form = (
      <div>
        <button className="submitButton" onClick={handleButtonClick}>
          Add New Expense
        </button>
      </div>
    );
  }

  return form;
};

export default ExpenseForm;
