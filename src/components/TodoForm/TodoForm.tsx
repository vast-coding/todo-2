import TextField from '@material-ui/core/TextField'
import useTodoForm from './useTodoForm'

function TodoForm() {
  const { value, setInput, createTodo } = useTodoForm()

  return (
    <form onSubmit={createTodo}>
      <TextField
        style={{ width: '100%' }}
        id="outlined-basic"
        value={value}
        onChange={setInput}
        label="Add Todo"
        variant="outlined"
      />
    </form>
  )
}

export default TodoForm
