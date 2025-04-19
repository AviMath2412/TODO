export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  category: string;
  dueDate?: Date;
  createdAt: Date;
  emoji?: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
}

export interface RoutineSuggestion {
  id: string;
  title: string;
  category: string;
  description: string;
  timeEstimate: string;
  difficulty: 'easy' | 'medium' | 'hard';
  emoji?: string;
}

export type View = 'landing' | 'app';