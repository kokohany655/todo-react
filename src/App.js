import './App.css';
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App" style={{"margin" :'50px'}}>
      <div style={{"width" : "400px"}}>
        <TodoList/>
      </div>
        
        
    </div>
  );
}

export default App;
