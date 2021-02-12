import React, { useState } from 'react'
import { todosRef } from '../../firebase'

const useTodoForm = () => {
  const [value, setValue] = useState('')

  const createTodo = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    const item = {
      task: value,
      done: false,
    }
    todosRef.push(item)
    setValue('')
  }

  const setInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value)

  return { value, setInput, createTodo }
}

export default useTodoForm
