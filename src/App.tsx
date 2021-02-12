import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
import React from 'react'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'

function App() {
  return (
    <div className="App">
      <Container className="container" maxWidth="sm">
        <Card>
          <CardContent>
            <h3>Simle TODO App 6</h3>
            <p>a paragraph</p>
            <TodoForm />
            <TodoList />
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}

export default App
