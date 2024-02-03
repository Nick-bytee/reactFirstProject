import ExpenseItem from "./components/Expenses/ExpenseItem";
import AddExpense from "./components/Expenses/AddExpense";
import { useState } from "react";
import ExpensesFilter from "./components/Expenses/ExpenseFilter";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Groceries",
      amount: "45.25",
      date: "2024-01-15",
      location: "Supermarket A",
    },
  ];

  const [expenseData, setExpenseData] = useState(expenses);

  const expenseDataHandler = (expense) => {
    setExpenseData((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  const [filteredYear, setFilteredYear] = useState("2024");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div id="root">
      <h1>Lets Get Started</h1>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <AddExpense getExpenseData={expenseDataHandler} />
      {expenseData.map((expense, index) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
    </div>
  );
}

export default App;
