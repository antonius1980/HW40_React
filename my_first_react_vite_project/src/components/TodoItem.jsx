import '../App.css';

function TodoItem({ todo, onDeleteTodo }) {
    return (
      <li className='px-2 py-3 flex justify-between border items-center'>
        {/* <span>{todo.id}</span> Додати ID */}
        <span>{todo.id}</span>
        <span>{todo.title}</span>
        <button onClick={() => onDeleteTodo(todo.id)} className='bg-sky-500/50 py-1 px-3 rounded-xl'>Delete</button>
      </li>
    )
}

export default TodoItem;
