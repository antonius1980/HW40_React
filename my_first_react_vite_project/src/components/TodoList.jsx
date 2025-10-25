import TodoItem from './TodoItem';
import '../App.css';

function TodoList({ todos, onDeleteTodo }) {
    
    return (
       <ul className='min-w-md'>
        { todos.length === 0 ? (
            <p>Your todo list is empty</p>
        ) : (
            todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo}/>
            ))
        )}
       </ul>
    )
}

export default TodoList;

// todos.length

// Оксана
// Оксана
// Оксана

// this.name = name