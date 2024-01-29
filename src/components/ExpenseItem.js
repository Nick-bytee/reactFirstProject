import "./ExpenseItem.css";

function ExpenseItem() {
  const date = new Date(29, 0, 2024);
  const expenseName = "Petrol";
  const expenseAmount = 200;
  const location = "Delhi";

  return (
    <div className="expense-item">
      <div>{date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseName}</h2>
        <h2>{location}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
