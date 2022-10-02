import './App.css';
import InputFeild from './Components/InputFeild';
import React, { useState } from 'react';
import { Todo } from './model';
import TodoList from './Components/TodoList';
function App() {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  const handleAdd = (e : React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, {id : Date.now(), todo : todo, isDone : false}]);
      setTodo("");
    }
  };

  return (
      <div className="App">
        <span className="heading">Taskify</span>
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
  );
}

export default App;
