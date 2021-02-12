// 3:04 -> 3:11 = 7 minutes
import { todosRef } from '../../firebase'
import { ITodo } from './Todo.types'

const useTodo = (todo: ITodo) => {
  const toggleTodo = () => {
    todosRef.child(todo.id).set({ ...todo, done: !todo.done })
  }
  const deleteTodo = () => todosRef.child(todo.id).remove()
  return { toggleTodo, deleteTodo }
}

export default useTodo
