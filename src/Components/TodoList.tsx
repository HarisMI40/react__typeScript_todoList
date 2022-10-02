import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo'
import "./styles.css"

interface Props{
 todos : Array<Todo>,
 setTodos : React.Dispatch<React.SetStateAction<Todo[]>>,
 completedTodos : Array<Todo>,
 setCompletedTodos : React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList : React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos})=> {
  return (
    <div className="container">
          <div
            className={`todos`}
          >
            <span className="todos__heading">Active Tasks</span>
            {todos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={todos}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
          </div>
    </div>
  )
}

export default TodoList