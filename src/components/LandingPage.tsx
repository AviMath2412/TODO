import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Rocket,
  Brain,
  Target,
  Zap,
  ArrowRight,
  CheckCircle2,
  ListTodo,
  Moon,
  Sun,
  Layout,
  Smartphone,
  Globe2,
} from 'lucide-react';
import { useTodoStore } from '../store';
import clsx from 'clsx';

interface LandingPageProps {
  onGetStarted: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  const { darkMode, toggleDarkMode } = useTodoStore();

  return (
    <div
      className={clsx(
        'min-h-screen transition-colors duration-200',
        darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-gray-50 to-white'
      )}
    >
      {/* Navigation */}
      <nav className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white">
              <ListTodo size={24} />
            </div>
            <span className="text-xl font-bold">TaskFlow</span>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className={clsx(
              'flex items-center gap-2 rounded-full px-4 py-2 transition-colors',
              darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 shadow-sm'
            )}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex justify-center">
            <span className={clsx(
              'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium',
              darkMode ? 'bg-gray-800 text-blue-400' : 'bg-blue-50 text-blue-600'
            )}>
              <Sparkles size={16} />
              Revolutionizing Task Management
            </span>
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            Transform Your
            <br />
            Productivity Game
          </h1>
          <p className={clsx(
            'mx-auto mb-8 max-w-2xl text-lg',
            darkMode ? 'text-gray-300' : 'text-gray-600'
          )}>
            TaskFlow is more than just a todo app - it's your personal productivity companion.
            With AI-powered suggestions, smart categorization, and a beautiful interface,
            you'll get more done while staying motivated.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onGetStarted}
            className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-8 py-4 font-medium text-white transition-colors hover:bg-blue-600"
          >
            Get Started Now
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-32 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={clsx(
              'group rounded-xl p-6 transition-all',
              darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white shadow-sm hover:shadow-md'
            )}
          >
            <div className="mb-4 inline-block rounded-lg bg-blue-500 p-3 text-white">
              <Rocket size={24} />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Smart Routines</h3>
            <p className={clsx('text-base', darkMode ? 'text-gray-400' : 'text-gray-600')}>
              AI-powered suggestions help you build better habits and achieve your goals faster.
              Get personalized routine recommendations based on your productivity patterns.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={clsx(
              'group rounded-xl p-6 transition-all',
              darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white shadow-sm hover:shadow-md'
            )}
          >
            <div className="mb-4 inline-block rounded-lg bg-purple-500 p-3 text-white">
              <Layout size={24} />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Beautiful Interface</h3>
            <p className={clsx('text-base', darkMode ? 'text-gray-400' : 'text-gray-600')}>
              A stunning, intuitive interface that makes task management a joy.
              Dark mode support and smooth animations enhance your experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={clsx(
              'group rounded-xl p-6 transition-all',
              darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white shadow-sm hover:shadow-md'
            )}
          >
            <div className="mb-4 inline-block rounded-lg bg-green-500 p-3 text-white">
              <Target size={24} />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Goal Tracking</h3>
            <p className={clsx('text-base', darkMode ? 'text-gray-400' : 'text-gray-600')}>
              Set, track, and achieve your goals with visual progress indicators.
              Celebrate your wins with completion animations and statistics.
            </p>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-12 md:grid-cols-2"
          >
            <div className="text-left">
              <h2 className={clsx(
                'mb-6 text-3xl font-bold',
                darkMode ? 'text-white' : 'text-gray-900'
              )}>
                Why Choose TaskFlow?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-blue-500 p-2 text-white">
                    <Globe2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Cross-Platform Sync</h3>
                    <p className={clsx('text-sm', darkMode ? 'text-gray-400' : 'text-gray-600')}>
                      Access your tasks from any device, with real-time synchronization
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-purple-500 p-2 text-white">
                    <Brain size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">AI-Powered Insights</h3>
                    <p className={clsx('text-sm', darkMode ? 'text-gray-400' : 'text-gray-600')}>
                      Get smart suggestions and productivity insights based on your habits
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-green-500 p-2 text-white">
                    <Smartphone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Mobile-First Design</h3>
                    <p className={clsx('text-sm', darkMode ? 'text-gray-400' : 'text-gray-600')}>
                      Optimized for all devices with a responsive, intuitive interface
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className={clsx(
                'rounded-xl p-6',
                darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
              )}>
                <div className="space-y-4">
                  <div className={clsx(
                    'rounded-lg p-4',
                    darkMode ? 'bg-gray-700' : 'bg-gray-50'
                  )}>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="text-green-500" />
                      <span className="text-sm font-medium">Complete daily workout</span>
                    </div>
                  </div>
                  <div className={clsx(
                    'rounded-lg p-4',
                    darkMode ? 'bg-gray-700' : 'bg-gray-50'
                  )}>
                    <div className="flex items-center gap-2">
                      <Target className="text-blue-500" />
                      <span className="text-sm font-medium">Project milestone reached</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mx-auto mt-32 max-w-3xl rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 text-white"
        >
          <h2 className="mb-4 text-3xl font-bold">Ready to Level Up?</h2>
          <p className="mb-6 text-lg opacity-90">
            Join thousands of users who are already crushing their goals with TaskFlow.
            Start your productivity journey today!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onGetStarted}
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-blue-600 transition-transform"
          >
            Get Started Free
            <Zap size={20} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};