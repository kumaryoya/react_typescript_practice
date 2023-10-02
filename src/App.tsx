import { useState } from "react";
import TaskList from "./TaskList";

export type Todo = {
  id: number;
  text: string;
}

const App = () => {
  const [ inputText, setInputText ] = useState("");
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Todo1" },
    { id: 2, text: "Todo2" },
  ]);

  const addTodoItem = () => {
    setTodos(state => [...state, { id: state.length, text: inputText }]);
    setInputText("");
  }
  return (
    <>
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <button onClick={addTodoItem}>追加</button>
        <TaskList todos={todos} />
    </>
  )
};

export default App;
