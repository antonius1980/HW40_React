import { useEffect, useState } from 'react'
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);
  const [sortAscId, setSortAscId] = useState(true);
  


  // useEffect(() => {
  //   const URL = 'https://jsonplaceholder.typicode.com/todos?_limit=3';
  //   fetch(URL)
  //     .then((response) => response.json())
  //     .then((data) => setTodos(data))
  //     .catch((error) => {
  //       console.error('Error in download', error);
  //     })
  // }, []);

  useEffect(() => {
    const saveTodos = localStorage.getItem('todos');
    
    
    if (saveTodos) {
      setTodos(JSON.parse(saveTodos))
    } else {
      
      const URL = 'https://jsonplaceholder.typicode.com/todos?_limit=0';
    const fetchToDos = async () => {
        try {
        const response = await axios.get(URL);
        setTodos(response.data)
      } catch (err) {
        console.log(err)
        }
    };
    fetchToDos();
    }
  }, [])

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos))
  // }, [todos]);

  const addTodo = (title, category, checked) => {
    let count = todos.length + 1;
    const newTodo = {
      id: count, title, category, checked
    };
    console.log(count, title, category, checked);
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (id) => {
    const updateTodos = todos
        .filter((todo) => todo.id !== id)
      .map((todo, index) => ({
        ...todo,
        id: index + 1,
      }))
    setTodos(updateTodos);
  }

  const checkTodo = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updated);
  }

  const sortTodos = () => {
    if (todos.length > 1) {
    const sorted = [...todos].sort((a, b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()) return sortAsc ? -1 : 1;
      if (a.title.toLowerCase() < b.title.toLowerCase()) return sortAsc ? 1 : -1;
      return 0;
    })
      setTodos(sorted);
      setSortAsc(!sortAsc);
    }

  }

    const sortTodosById = () => {
    if (todos.length > 1) {
      const sorted = [...todos].sort((a, b) => {
        if(a.id > b.id) return sortAscId ? -1 : 1;
        if(a.id < b.id) return sortAscId ? 1 : -1;
        return 0;
      })

        setTodos(sorted);
        setSortAscId(!sortAscId);
    }
  }
//todo: inside of return() below place &#8597; arrow properly replacing the arrowhere text
  return (
    <div className="bg-gray-100 p-6 flex flex-col items-center rounded-xl border border-sky-700">
      <h1 className='text-2xl font-bold text-center mb-4'>My Todo List</h1>
      <TodoForm onAddTodo = {addTodo}/>
      <div className='p-5 flex flex-row justify-between'>
        <button onClick={sortTodos} className='bg-sky-500/50 py-2 mr-2 inline-block px-4 rounded-xl mb-5'>Sort {sortAsc ? 'A - Z ↑'  : 'Z - A ↓'}</button>
        <button onClick={sortTodosById} className='bg-sky-500/50 py-2  inline-block px-4 rounded-xl mb-5'>Sort by id {sortAscId ? '0 - 9 ↑' : '9 - 0 ↓'}</button>
      </div>
      <TodoList todos={todos} onDeleteTodo={deleteTodo} onCheckTodo={checkTodo} />
    </div>
  )
}

export default App;


// ----------------------------------------------------------------

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
