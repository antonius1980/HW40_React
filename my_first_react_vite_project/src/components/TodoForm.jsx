import { useState } from 'react';
import '../App.css';

function TodoForm({ onAddTodo }) {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Освіта');
    const [checked, setChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === '') return;

        onAddTodo(title, category, checked);
        setTitle('');
        setCategory('Освіта');
        setChecked(false);
    }

    return (
        <form onSubmit={handleSubmit} className='form mb-5 w-4xl flex justify-between items-center'>
            <input 
                type='text' 
                value={title} 
                required
                onChange={(e) => setTitle(e.target.value)} 
                placeholder='Enter new ToDo...'
                className='mr-3 grow bg-sky-100 text-stone-700 border border-sky-500 outline-orange-400 rounded-md py-2 px-3'
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)} className='mx-2 grow bg-sky-100 text-stone-700 border border-sky-500 outline-orange-400 rounded-md py-2 px-3'>
                <option value="Освіта" className='text-sky-500'>Освіта</option>
                <option value="Робота" className='text-sky-500'>Робота</option>
                <option value="Особисті" className='text-sky-500'>Особисті</option>
            </select>
            <label htmlFor="isDone" className='mx-3'>Is it done?</label>
            <input 
                id='isDone'
                type='checkbox' 
                checked={checked} 
                onChange={(e) => setChecked(e.target.checked)} 
                className='mx-3 cursor-pointer size-6'
            />
            <button type='submit' className='bg-sky-600/90 text-white font-medium py-2 px-6 rounded-md'>Add Todo</button>
        </form>
    )
}


export default TodoForm;
