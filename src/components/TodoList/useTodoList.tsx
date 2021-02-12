import { useEffect, useState } from 'react'

import { todosRef } from '../../firebase'

function useTodoList() {
  const [todos, setTodos] = useState<any>([])
  useEffect(() => {
    todosRef.on('value', (snapshot: any) => {
      let items = snapshot.val()
      // console.log({ items })
      let newState = []
      for (let id in items) {
        const { task, done } = items[id]
        newState.push({ id, task, done })
      }
      // console.log({ newState })
      setTodos(newState)
    })
  }, [])
  return { todos }
}

export default useTodoList
