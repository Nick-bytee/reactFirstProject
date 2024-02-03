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
    {
      id: 12,
      title: "Fuel",
      amount: "90.00",
      date: "2022-01-15",
      location: "Supermarket A",
    },
  ];

  const [expenseData, setExpenseData] = useState(expenses);

  const expenseDataHandler = (expense) => {
    setExpenseData((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const [filteredYear, setFilteredYear] = useState("select");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    const filteredArray = expenses.filter((expense) => {
      console.log(expense.date.split("-")[0], selectedYear);
      return expense.date.split("-")[0] === selectedYear;
    });
    setExpenseData(filteredArray);
  };

  let filteredExpenseData = <h3>No Expenses Found</h3>;

  if (expenseData.length > 0) {
    filteredExpenseData = expenseData.map((expense, index) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        location={expense.location}
      />
    ));
    if (filteredExpenseData.length === 1) {
      filteredExpenseData.push(
        <h3>Only single Expense here. Please add more...</h3>
      );
    }
  }

  return (
    <div id="root">
      <h1>Expense Tracker</h1>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <AddExpense getExpenseData={expenseDataHandler} />
      {filteredExpenseData}
    </div>
  );
}

export default App;
