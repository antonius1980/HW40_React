import '../App.css';


const categoryColors = {
  'Освіта' : 'bg-sky-600',
  'Робота' : 'bg-green-600',
  'Особисті' : 'bg-amber-600',
};
function TodoItem({ todo, onDeleteTodo, onCheckTodo }) {
    return (
      <li className={`px-6 py-3 flex justify-between border items-center `}>
        <span className="mr-3">{todo.id}.</span>
        <span className="grow text-start">{todo.title}</span>
        <span className={`text-xs mt-1 px-3 py-1.5 rounded-full self-start mx-3 ${categoryColors[todo.category]}`}>{todo.category}</span>
        <input type='checkbox' checked={checked} onChange={() => onCheckTodo(todo.id)} className='mr-3 grow  border border-gray-300 rounded-md py-2 px-3' />
        <button onClick={() => onDeleteTodo(todo.id)} className='bg-sky-500/50 py-1 px-3 rounded-xl'>Delete</button>
      </li>
    )
}

export default TodoItem;
