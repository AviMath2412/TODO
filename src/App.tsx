import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ListTodo, Sparkles, Moon, Sun, Home } from 'lucide-react';
import { useTodoStore } from './store';
import { TodoItem } from './components/TodoItem';
import { AddTodo } from './components/AddTodo';
import { CategoryFilter } from './components/CategoryFilter';
import { RoutineSuggestions } from './components/RoutineSuggestions';
import { LandingPage } from './components/LandingPage';
import { View } from './types';
import clsx from 'clsx';

function App() {
  const { todos, categories, darkMode, toggleDarkMode } = useTodoStore();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [view, setView] = useState<View>('landing');

  const filteredTodos = selectedCategory
    ? todos.filter((todo) => todo.category === selectedCategory)
    : todos;

  const completedTodos = filteredTodos.filter((todo) => todo.completed);
  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

  const completionRate =
    filteredTodos.length > 0
      ? Math.round((completedTodos.length / filteredTodos.length) * 100)
      : 0;

  if (view === 'landing') {
    return <LandingPage onGetStarted={() => setView('app')} />;
  }

  return (
    <div
      className={clsx(
        'min-h-screen transition-colors duration-200',
        darkMode
          ? 'bg-gray-900 text-white'
          : 'bg-gradient-to-b from-gray-50 to-white'
      )}
    >
      <div className="mx-auto max-w-4xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <ListTodo
              className={clsx('h-8 w-8', darkMode ? 'text-blue-400' : 'text-blue-500')}
            />
            <h1 className={clsx('text-2xl font-bold', darkMode ? 'text-white' : 'text-gray-900')}>
              My Tasks
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setView('landing')}
              className={clsx(
                'flex items-center gap-2 rounded-full px-4 py-2 transition-colors',
                darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 shadow-sm'
              )}
            >
              <Home size={18} />
              <span className="text-sm font-medium">Home</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className={clsx(
                'flex items-center gap-2 rounded-full px-4 py-2 transition-colors',
                darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 shadow-sm'
              )}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              <span className="text-sm font-medium">
                {darkMode ? 'Light' : 'Dark'} Mode
              </span>
            </motion.button>
            <div className="flex items-center gap-2">
              <Sparkles
                className={clsx('h-5 w-5', darkMode ? 'text-yellow-400' : 'text-yellow-500')}
              />
              <span className={clsx('text-sm font-medium', darkMode ? 'text-gray-300' : 'text-gray-600')}>
                {completionRate}% Complete
              </span>
            </div>
            <div
              className={clsx(
                'flex items-center gap-2 rounded-full px-4 py-2',
                darkMode ? 'bg-gray-800' : 'bg-gray-100'
              )}
            >
              <CheckCircle2
                className={clsx('h-5 w-5', darkMode ? 'text-green-400' : 'text-green-500')}
              />
              <span className={clsx('text-sm font-medium', darkMode ? 'text-gray-300' : 'text-gray-600')}>
                {completedTodos.length} of {filteredTodos.length} completed
              </span>
            </div>
          </div>
        </motion.div>

        <RoutineSuggestions />

        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <AddTodo />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {incompleteTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                category={categories.find((c) => c.id === todo.category)!}
              />
            ))}
          </AnimatePresence>

          {completedTodos.length > 0 && (
            <>
              <h2 className={clsx('mt-8 text-lg font-semibold', darkMode ? 'text-gray-300' : 'text-gray-700')}>
                Completed
              </h2>
              <AnimatePresence mode="popLayout">
                {completedTodos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    category={categories.find((c) => c.id === todo.category)!}
                  />
                ))}
              </AnimatePresence>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default App;