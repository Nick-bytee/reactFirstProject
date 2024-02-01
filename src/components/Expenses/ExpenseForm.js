import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [formData, setData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const formHandler = (e) => {
    console.log(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form>
        <div className="expenseForm">
          <div className="expenseinput">
            <input
              className="titleInput"
              type="text"
              placeholder="enter title"
              onChange={formHandler}
            />
          </div>
          <div className="expenseinput">
            <input
              type="text"
              placeholder="enter amount"
              onChange={formHandler}
            />
          </div>
          <div className="expenseinput">
            <input
              type="date"
              placeholder="enter date"
              onChange={formHandler}
            />
          </div>
          <div>
            <button className="submitButton" onChange={clickHandler}>
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
