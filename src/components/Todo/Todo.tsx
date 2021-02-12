// 3:04 -> 3:11 = 7 minutes

import './Todo.css'

import DeleteIcon from '@material-ui/icons/Delete'
import { ITodo } from './Todo.types'
import IconButton from '@material-ui/core/IconButton'
import Switch from '@material-ui/core/Switch'
import useTodo from './useTodo'

const Todo = ({ todo }: { todo: ITodo }) => {
  const { toggleTodo, deleteTodo } = useTodo(todo)

  return (
    <div className="Todo">
      <Switch
        edge="end"
        checked={todo.done}
        onChange={toggleTodo}
        inputProps={{ 'aria-labelledby': 'switch-list-label-bluetooth' }}
      />
      <p>{todo.task}</p>
      <IconButton aria-label="delete" onClick={deleteTodo}>
        <DeleteIcon fontSize="large" />
      </IconButton>
    </div>
  )
}

export default Todo
