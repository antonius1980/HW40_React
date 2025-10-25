import { useState } from 'react';
import '../App.css';

function TodoForm({ onAddTodo }) {
    const [title, setTitle] = useState('');
    // const [checked, setChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === '') return;

        onAddTodo(title);
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit} className='form mb-5'>
            <input 
                type='text' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder='Enter new ToDo...'
                className='mr-3 flex-1 border border-gray-300 rounded-md py-2 px-1'
            />
            <button type='submit' className='bg-sky-500/50 py-2 px-4 rounded-xl'>Add Todo</button>
        </form>
    )
}


export default TodoForm;