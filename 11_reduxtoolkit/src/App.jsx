
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import { store } from './app/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <h1>React Redux Toolkit</h1>
      <AddTodo />
      <Todo />
    </Provider>
  )
}

export default App
