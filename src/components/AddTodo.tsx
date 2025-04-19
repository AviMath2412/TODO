import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTodoStore } from '../store';

export const AddTodo: React.FC = () => {
  const [title, setTitle] = useState('');
  const { addTodo, categories } = useTodoStore();
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTodo({
      title: title.trim(),
      completed: false,
      category: selectedCategory,
    });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 flex gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 rounded-lg border border-gray-200 px-4 py-2 focus:border-blue-500 focus:outline-none"
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="rounded-lg border border-gray-200 px-4 py-2 focus:border-blue-500 focus:outline-none"
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-600"
      >
        <Plus size={20} />
        Add
      </button>
    </form>
  );
};