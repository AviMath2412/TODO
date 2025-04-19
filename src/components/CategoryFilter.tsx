import React from 'react';
import { useTodoStore } from '../store';
import clsx from 'clsx';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const { categories } = useTodoStore();

  return (
    <div className="mb-6 flex gap-2">
      <button
        onClick={() => onSelectCategory(null)}
        className={clsx(
          'rounded-full px-4 py-1 text-sm font-medium transition-colors',
          selectedCategory === null
            ? 'bg-gray-900 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        )}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={clsx(
            'rounded-full px-4 py-1 text-sm font-medium transition-colors',
            selectedCategory === category.id
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          )}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};