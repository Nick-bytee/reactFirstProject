import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lets Get Started</h1>
        <ExpenseItem>
          <h3>Food Rs 10</h3>
          <h3>Petrol Rs 100</h3>
          <h3>Movies Rs 200</h3>
        </ExpenseItem>
      </header>
    </div>
  );
}

export default App;
