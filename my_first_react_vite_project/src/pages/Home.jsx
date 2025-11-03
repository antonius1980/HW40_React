import { useEffect, useState } from 'react'
import axios from 'axios';
import Header from '../layouts/Header';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import '../App.css';

function Home() {
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('todos')) || [];
    } catch {
      return [];
    }
  });

  const [sortAsc, setSortAsc] = useState(true);
  const [sortAscId, setSortAscId] = useState(true);
  const [filterCategory, setFilterCategory] = useState('Усі');


  // useEffect(() => {
  //   const URL = 'https://jsonplaceholder.typicode.com/todos?_limit=3';
  //   fetch(URL)
  //     .then((response) => response.json())
  //     .then((data) => setTodos(data))
  //     .catch((error) => {
  //       console.error('Error in download', error);
  //     })
  // }, []);

  // useEffect(() => {
  //   const saveTodos = localStorage.getItem('todos');
    
    
  //   if (saveTodos) {
  //     setTodos(JSON.parse(saveTodos))
  //   } else {
      
  //     const URL = 'https://jsonplaceholder.typicode.com/todos?_limit=10';
  //   const fetchToDos = async () => {
  //       try {
  //       const response = await axios.get(URL);
  //       setTodos(response.data)
  //     } catch (err) {
  //       console.log(err)
  //       }
  //   };
  //   fetchToDos();
  //   }
  // }, [])

  useEffect(() => {
  if (todos.length > 0) return;
  const URL = 'https://jsonplaceholder.typicode.com/todos?_limit=10';
  (async () => {
    try {
      const { data } = await axios.get(URL);
      setTodos(data);
    } catch (err) {
      console.log(err);
    }
  })();
}, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  const addTodo = (title, category, completed) => {
    let count = todos.length + 1;
    const newTodo = {
      id: count, title, category, completed
    };
    //console.log(count, title, category, completed);
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
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
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

    const filterTodos = filterCategory === 'Усі' ? todos : todos.filter((todo) => todo.category === filterCategory);

  return (
            <main>
                <title>My Site: Home</title>
                
                <meta name="author" content="Anton Skrypnychenko" />
                <meta
                    name="keywords"
                    content="React, JavaScript, semantic markup, html"
                />
                <meta
                    name="description"
                    content="My React App"
                />
                <div className="bg-gray-100 p-6 flex flex-col items-center rounded-xl border border-sky-700">
                <h1 className='text-2xl font-bold text-center mb-4'>My Todo List</h1>
                <TodoForm onAddTodo = {addTodo}/>
                <div className='p-5 flex flex-row justify-between gap-4'>
                    <button onClick={sortTodos} className='bg-sky-500/50 py-2 mr-2 inline-block px-4 rounded-xl mb-5'>Sort {sortAsc ? 'A - Z ↓'  : 'Z - A ↑'}</button>
                    <button onClick={sortTodosById} className='bg-sky-500/50 py-2  inline-block px-4 rounded-xl mb-5'>Sort by id {sortAscId ? '0 - 9 ↓' : '9 - 0 ↑'}</button>
                                    {['Усі', 'Освіта', 'Робота', 'Особисті'].map(cat =>
                                        <button
                                            key={cat}
                                            onClick={() => setFilterCategory(cat)}
                                            className='bg-sky-600/50 py-2 px-4 rounded-xl mb-5'
                                        >{cat}
                                        </button>)}

                </div>
                <TodoList todos={filterTodos} onDeleteTodo={deleteTodo} onCheckTodo={checkTodo} />
                </div>
            </main>
  )
}

export default Home;


