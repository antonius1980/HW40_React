import { useState } from 'react';
import '../App.css';

function TodoForm({ onAddTodo }) {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Освіта');
    const [completed, setCompleted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === '') return;

        onAddTodo(title, category, completed);
        setTitle('');
        setCategory('Освіта');
        setCompleted(false);
    }

    return (
        <form onSubmit={handleSubmit} className='form flex-wrap mb-5 w-full flex justify-between items-center'>
            <input 
                type='text' 
                value={title} 
                required
                onChange={(e) => setTitle(e.target.value)} 
                placeholder='Enter new ToDo...'
                className='mr-3 my-5 grow bg-sky-100 text-stone-700 border border-sky-500 outline-orange-400 rounded-md py-2 px-3 min-w-40'
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)} className='mr-3 my-5 grow bg-sky-100 text-stone-700 border border-sky-500 outline-orange-400 rounded-md py-2 px-3 min-w-40'>
                <option value="Освіта" className='text-sky-500'>Освіта</option>
                <option value="Робота" className='text-sky-500'>Робота</option>
                <option value="Особисті" className='text-sky-500'>Особисті</option>
            </select>
            <label htmlFor="isDone" className='mx-3 max-w-40 ml-auto'>Is it done?</label>
            <input 
                id='isDone'
                type='checkbox' 
                checked={completed} 
                onChange={(e) => setCompleted(e.target.checked)} 
                className='mr-5 cursor-pointer size-6 outline-orange-400'
            />
            <button type='submit' className='bg-sky-600/90 hover:bg-sky-500/90 text-white font-medium py-2 px-6 rounded-md ml-auto outline-orange-400 cursor-pointer'>Add Todo</button>
        </form>
    )
}


export default TodoForm;
