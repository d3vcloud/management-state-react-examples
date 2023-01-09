import { useAtom } from 'jotai';
import React from 'react';

const TodoItem = ({ todoAtom, remove }) => {
  const [item, setItem] = useAtom(todoAtom);
  return (
    <li
      style={{
        display: 'flex',
        gap: '10px'
      }}
    >
      <span
        className={item.completed ? 'line-through' : ''}
        onClick={() =>
          setItem(prev => ({ ...prev, completed: !prev.completed }))
        }
      >
        {item.title}
      </span>
      <button onClick={() => remove(todoAtom)}>🗑️</button>
    </li>
  );
};

export default TodoItem;
