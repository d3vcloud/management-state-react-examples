import { atom, useAtom, useSetAtom } from 'jotai';
import { amountTodosAtom, filterAtom, filteredAtom, todosAtom } from './atom';
import TodoItem from './TodoItem';

const TodoApp = () => {
  const setTodosAtom = useSetAtom(todosAtom);
  const setFilterAtom = useSetAtom(filterAtom);
  const [todos] = useAtom(filteredAtom)
  const [amountTodos] = useAtom(amountTodosAtom);

  const handleSubmit = (e) => {
    e.preventDefault()
    const title = e.currentTarget.inputValue.value
    setTodosAtom(prevTodos => [...prevTodos, atom({id: +Date.now(), title, completed: false})])
    e.currentTarget.inputValue.value = ''
  }

  const removeTodo = (atomTodo) => {
    setTodosAtom(prevTodos => prevTodos.filter(todo => todo !== atomTodo))
  }

  return (
    <>
      <h1>TODO con JOTAI y ATOMS</h1>
      <hr />
      <span>Todo total: {amountTodos}</span>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='inputValue'
          autoFocus
          placeholder='Agrega un todo...'
        />
      </form>
      <br />
      <div
        style={{
          display: 'flex',
          gap: '0.8rem'
        }}
      >
        <button onClick={() => setFilterAtom('all')}>Todos</button>
        <button onClick={() => setFilterAtom('pending')}>Pendientes</button>
        <button onClick={() => setFilterAtom('completed')}>Finalizados</button>
      </div>
      <ul>
        {todos.map(atom => (
          <TodoItem todoAtom={atom} remove={removeTodo} />
        ))}
      </ul>
    </>
  );
};

export default TodoApp;
