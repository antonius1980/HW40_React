import '../App.css';


const categoryColors = {
  'Освіта' : 'bg-sky-500',
  'Робота' : 'bg-green-500',
  'Особисті' : 'bg-amber-500',
};
function TodoItem({ todo, onDeleteTodo, onCheckTodo }) {
    return (
      <li className={`px-6 py-3 mb-1 flex justify-between border border-gray-400 bg-white rounded-sm items-center `}>
        <span className="mr-3">{todo.id}.</span>
        <input type='checkbox' checked={!!todo.checked} onChange={() => onCheckTodo(todo.id)} className='mr-3 cursor-pointer size-6' />
        <span className="grow text-start">{todo.title}</span>
        <span className={`text-xs text-white font-medium mt-1 min-w-25 px-3 py-1.5 rounded-full self-start mx-3 ${categoryColors[todo.category]}`}>{todo.category}</span>
        <button onClick={() => onDeleteTodo(todo.id)} className='bg-red-700/90 text-white py-1 px-5 rounded-md'>Delete</button>
      </li>
    )
}

export default TodoItem;
