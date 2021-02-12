import React from 'react'
import Todo from '../Todo/Todo'
import Divider from '@material-ui/core/Divider'
import useTodoList from './useTodoList'

function TodoList() {
  const { todos } = useTodoList()
  return (
    <>
      {todos.map((todo: any, i: number) => (
        <React.Fragment key={todo.id}>
          <Todo todo={todo} />
          {i < todos.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </>
  )
}

export default TodoList
