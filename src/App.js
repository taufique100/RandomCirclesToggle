import './App.css';
import Circle from './Component/Circle/Circle'
import AddTodos from './Component/todo/AddTodos';
import Todos from './Component/todo/Todos';


function App() {

  return (
    <div className="App">
      {/* <Circle/> */}
      <AddTodos/>
      <Todos/>    
    </div>
  );
}

export default App;
