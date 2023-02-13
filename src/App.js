import './App.css';
import Taskitems from './components/Taskitems'
function App() {
  const obj = {
    date: new Date(2023, 12, 2),
    tittle: "Solidity Course",
    priority: 1,
  }
  return (
    <div>
      <h2> Hello React!!! </h2>
      <p>Welcome Everyone </p>
      <Taskitems
        abc={obj.date}
        def={obj.tittle}
        ghi={obj.priority}></Taskitems>
    </div>
  );
}

export default App;
