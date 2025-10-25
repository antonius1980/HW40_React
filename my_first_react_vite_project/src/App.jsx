import { useEffect, useState } from 'react'
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);


  // useEffect(() => {
  //   const URL = 'https://jsonplaceholder.typicode.com/todos?_limit=3';
  //   fetch(URL)
  //     .then((response) => response.json())
  //     .then((data) => setTodos(data))
  //     .catch((error) => {
  //       console.error('Error in download', error);
  //     })
  // }, []);

  useEffect(()=>{
    const URL = 'https://jsonplaceholder.typicode.com/todos?_limit=3';
    const fetchToDos = async () => {
      try{
        const response = await axios.get(URL);
        setTodos(response.data)
      } catch (err) {
        console.log(err)
      } 
    };
    fetchToDos();
  }, [])

  const addTodo = (title) => {
    let count = todos.length + 1;
    const newTodo = {
      id: count, title
    };
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const sortTodos = () => {
    const sorted = [...todos].sort((a, b) => {
      if(a.title.toLowerCase() < b.title.toLowerCase()) return sortAsc ? -1 : 1;
      if(a.title.toLowerCase() > b.title.toLowerCase()) return sortAsc ? 1 : -1;
      return 0;
    })
    setTodos(sorted);
    setSortAsc(!sortAsc);
  }

  return (
    <div className="bg-grey p-5 flex flex-col items-center">
      <h1 className='text-2xl font-bold text-center mb-4'>My Todo List</h1>
      <TodoForm onAddTodo = {addTodo}/>
      <button onClick={sortTodos} className='bg-sky-500/50 py-2 px-4 rounded-xl mb-5'>Sort {sortAsc ? 'A - Z' : 'Z - A'}</button>
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
    </div>
  )
}

export default App;


// let todos = [
// {1, 'Купити хліб', false},
// {2, 'Вивчити JS', true}
// ];

// setTodos() {
//   todos.push()
// }

// id
// textValue
// isChecked


// props
// state


// useEffect(function, [])
// 1 Запроси
// 2 Збереження даних в ls
// 3 Таймери 
// 4 Слухачи подій DOM елементів