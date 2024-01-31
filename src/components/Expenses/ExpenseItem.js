import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (expense) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={expense.date}></ExpenseDate>
      <ExpenseDetails
        title={expense.title}
        location={expense.location}
        amount={expense.amount}
      ></ExpenseDetails>
    </div>
  );
};

export default ExpenseItem;
