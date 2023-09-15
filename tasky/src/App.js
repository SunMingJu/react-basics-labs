import logo from './logo.svg';
import Task from './components/Task';

import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today">
      <div className="style">Empty dishwasher</div>
      </Task>
      <Task title="Laundry" deadline="Tomorrow">
        <div className="style">Fold laundry and put away</div>
      </Task>
      <Task title="Tidy" deadline="Today" />
    </div>
  );
}

export default App;
