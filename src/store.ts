import { create } from 'zustand';
import { Todo, Category, RoutineSuggestion } from './types';

interface TodoStore {
  todos: Todo[];
  categories: Category[];
  routineSuggestions: RoutineSuggestion[];
  darkMode: boolean;
  toggleDarkMode: () => void;
  addTodo: (todo: Omit<Todo, 'id' | 'createdAt'>) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  reorderTodos: (todos: Todo[]) => void;
  addCategory: (category: Omit<Category, 'id'>) => void;
  addRoutineToTodos: (routine: RoutineSuggestion) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  categories: [
    { id: '1', name: 'Personal', color: '#3B82F6' },
    { id: '2', name: 'Work', color: '#EF4444' },
    { id: '3', name: 'Shopping', color: '#10B981' },
    { id: '4', name: 'Health', color: '#8B5CF6' },
    { id: '5', name: 'Learning', color: '#F59E0B' },
  ],
  routineSuggestions: [
    {
      id: '1',
      title: 'Morning Workout',
      category: '4',
      description: 'Start your day with a 20-minute exercise routine',
      timeEstimate: '20 mins',
      difficulty: 'medium',
    },
    {
      id: '2',
      title: 'Daily Reading',
      category: '5',
      description: 'Read a chapter from your current book',
      timeEstimate: '30 mins',
      difficulty: 'easy',
    },
    {
      id: '3',
      title: 'Weekly Planning',
      category: '2',
      description: 'Plan your work tasks for the upcoming week',
      timeEstimate: '45 mins',
      difficulty: 'medium',
    },
    {
      id: '4',
      title: 'Meditation Session',
      category: '4',
      description: 'Practice mindfulness and meditation',
      timeEstimate: '15 mins',
      difficulty: 'easy',
    },
    {
      id: '5',
      title: 'Learn New Skill',
      category: '5',
      description: 'Spend time learning something new',
      timeEstimate: '1 hour',
      difficulty: 'hard',
    },
  ],
  addTodo: (todo) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          ...todo,
          id: Math.random().toString(36).substring(7),
          createdAt: new Date(),
        },
      ],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  reorderTodos: (todos) => set({ todos }),
  addCategory: (category) =>
    set((state) => ({
      categories: [
        ...state.categories,
        { ...category, id: Math.random().toString(36).substring(7) },
      ],
    })),
  addRoutineToTodos: (routine) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Math.random().toString(36).substring(7),
          title: routine.title,
          completed: false,
          category: routine.category,
          createdAt: new Date(),
        },
      ],
    })),
}));