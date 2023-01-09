import { atom } from 'jotai';

export const todosAtom = atom([]);
export const filterAtom = atom('all'); // listar todos los atom inicialmente
export const filteredAtom = atom(get => {
  const todos = get(todosAtom);
  const filterValue = get(filterAtom);
  if (filterValue === 'all') return todos;
  else if (filterValue === 'pending')
    return todos.filter(todo => !get(todo).completed);
  else return todos.filter(todo => get(todo).completed);
});
export const amountTodosAtom = atom(get => get(todosAtom).length);
