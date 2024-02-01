import ExpenseItem from "./components/Expenses/ExpenseItem";
import AddExpense from "./components/Expenses/AddExpense";

function App() {
  const expenses = [
    {
      title: "Groceries",
      amount: "45.25",
      date: "2024-01-15",
      location: "Supermarket A",
    },
    {
      title: "Utilities",
      amount: "32.80",
      date: "2024-01-08",
      location: "Utility Company B",
    },
    {
      title: "Entertainment",
      amount: "15.50",
      date: "2024-01-20",
      location: "Cinema C",
    },
    {
      title: "Dining Out",
      amount: "27.75",
      date: "2024-01-12",
      location: "Restaurant D",
    },
    {
      title: "Transportation",
      amount: "50.40",
      date: "2024-01-05",
      location: "Gas Station E",
    },
  ];

  return (
    <div id="root">
      <h1>Lets Get Started</h1>
      <AddExpense></AddExpense>
      {expenses.map((expense, index) => (
        <ExpenseItem
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
