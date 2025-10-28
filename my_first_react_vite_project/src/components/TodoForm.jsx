import { useState } from 'react';
import '../App.css';

function TodoForm({ onAddTodo }) {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Освіта');
    // const [checked, setChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === '') return;

        onAddTodo(title, category);
        setTitle('');
        setCategory('Освіта');
    }

    return (
        <form onSubmit={handleSubmit} className='form mb-5 w-4xl flex justify-between'>
            <input 
                type='text' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder='Enter new ToDo...'
                className='mr-3 grow  border border-gray-300 rounded-md py-2 px-3'
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)} className='mx-2 grow  border border-gray-300 rounded-md py-2 px-3'>
                <option value="Освіта" className='text-sky-500'>Освіта</option>
                <option value="Робота" className='text-sky-500'>Робота</option>
                <option value="Особисті" className='text-sky-500'>Особисті</option>
            </select>
            <button type='submit' className='bg-sky-500/50 py-2 px-4 rounded-xl'>Add Todo</button>
        </form>
    )
}


export default TodoForm;