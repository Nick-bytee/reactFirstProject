import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

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
    <div className="App">
      <header className="App-header">
        <h1>Lets Get Started</h1>
        {expenses.map((expense, index) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
