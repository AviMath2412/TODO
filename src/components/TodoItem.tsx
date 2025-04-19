import React from 'react';
import { motion } from 'framer-motion';
import { Check, Trash2, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { Todo } from '../types';
import { useTodoStore } from '../store';
import clsx from 'clsx';

interface TodoItemProps {
  todo: Todo;
  category: { color: string; name: string };
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, category }) => {
  const { toggleTodo, deleteTodo, darkMode } = useTodoStore();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.02 }}
      className={clsx(
        'group flex items-center gap-4 rounded-lg p-4 transition-all',
        darkMode
          ? 'bg-gray-800 hover:bg-gray-700'
          : 'bg-white hover:shadow-md'
      )}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => toggleTodo(todo.id)}
        className={clsx(
          'flex h-6 w-6 items-center justify-center rounded-full border-2 transition-colors',
          todo.completed
            ? 'border-green-500 bg-green-500'
            : darkMode
            ? 'border-gray-600 hover:border-green-400'
            : 'border-gray-300 hover:border-green-500'
        )}
      >
        {todo.completed && <Check size={14} className="text-white" />}
      </motion.button>

      <div className="flex-1">
        <p
          className={clsx(
            'transition-colors',
            todo.completed
              ? darkMode
                ? 'text-gray-500 line-through'
                : 'text-gray-400 line-through'
              : darkMode
              ? 'text-white'
              : 'text-gray-800'
          )}
        >
          {todo.title}
        </p>
        <div className="mt-1 flex items-center gap-2">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ backgroundColor: category.color }}
          />
          <span className={clsx('text-sm', darkMode ? 'text-gray-400' : 'text-gray-500')}>
            {category.name}
          </span>
          {todo.dueDate && (
            <div className={clsx('flex items-center gap-1 text-sm', darkMode ? 'text-gray-400' : 'text-gray-500')}>
              <Calendar size={12} />
              {format(todo.dueDate, 'MMM d')}
            </div>
          )}
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => deleteTodo(todo.id)}
        className="opacity-0 transition-opacity group-hover:opacity-100"
      >
        <Trash2 className="h-5 w-5 text-red-500" />
      </motion.button>
    </motion.div>
  );
};