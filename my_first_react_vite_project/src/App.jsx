import React from "react";
import { Routes, Route} from 'react-router';

import Home from './pages/Home';
import About from './pages/About';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import './App.css'

function App() {
  return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
            </Routes>
            <Footer />        
        </>
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
