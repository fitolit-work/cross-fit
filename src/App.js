import Days from "./components/Days";
import data from "./data/trainings.json"
import './App.css';

function App() {
  return (
    <div className="App">
      <Days data={data} />
    </div>
  );
}

export default App;
