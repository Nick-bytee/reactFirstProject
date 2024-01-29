import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(expense) {
  return (
    <div className="expense-item">
      <div>{expense.date}</div>
      <ExpenseDetails
        title={expense.title}
        location={expense.location}
        price={expense.price}
      ></ExpenseDetails>
    </div>
  );
}

export default ExpenseItem;
