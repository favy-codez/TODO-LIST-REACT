import "./App.css";
import Navbar from "./components/Navbar";
import AddTodo from "./components/AddTodo";
import TodoContainer from "./components/TodoContainer";

function App() {
  return <div className="App">
    {/* imported the components, so they can be displayed on the UI */}
    <Navbar />
    <AddTodo/>
    <TodoContainer/>
  </div>;
}

export default App;
