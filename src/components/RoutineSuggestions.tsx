import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Plus, Zap } from 'lucide-react';
import { useTodoStore } from '../store';
import clsx from 'clsx';

export const RoutineSuggestions: React.FC = () => {
  const { routineSuggestions, categories, addRoutineToTodos } = useTodoStore();

  return (
    <div className="mb-8">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">
        Suggested Routines
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {routineSuggestions.map((routine) => {
          const category = categories.find((c) => c.id === routine.category)!;
          return (
            <motion.div
              key={routine.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group relative overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="text-sm font-medium text-gray-600">
                    {category.name}
                  </span>
                </div>
                <div
                  className={clsx(
                    'rounded-full px-2 py-1 text-xs font-medium',
                    {
                      'bg-green-100 text-green-700': routine.difficulty === 'easy',
                      'bg-yellow-100 text-yellow-700':
                        routine.difficulty === 'medium',
                      'bg-red-100 text-red-700': routine.difficulty === 'hard',
                    }
                  )}
                >
                  {routine.difficulty}
                </div>
              </div>
              <h3 className="mb-2 text-lg font-medium text-gray-800">
                {routine.title}
              </h3>
              <p className="mb-4 text-sm text-gray-600">{routine.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Clock size={14} />
                  <span>{routine.timeEstimate}</span>
                </div>
                <button
                  onClick={() => addRoutineToTodos(routine)}
                  className="flex items-center gap-1 rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-blue-600"
                >
                  <Plus size={14} />
                  Add to Tasks
                </button>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};