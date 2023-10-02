import { Todo } from "./App";

type TaskListProps = {
  todos: Todo[];
};

const TaskList: React.FC<TaskListProps> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return <li key={todo.id}>{todo.text}</li>;
      })}
    </ul>
  );
};

export default TaskList;
