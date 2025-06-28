import React, { useState } from 'react';
import { 
  Target, 
  Plus, 
  Calendar, 
  TrendingUp, 
  CheckCircle,
  Clock,
  Flag,
  MoreHorizontal,
  Edit3,
  Trash2
} from 'lucide-react';

interface Goal {
  id: string;
  title: string;
  description: string;
  progress: number;
  target: number;
  unit: string;
  deadline: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Active' | 'Completed' | 'Paused';
  category: string;
}

const Goals = () => {
  const [goals] = useState<Goal[]>([
    {
      id: '1',
      title: 'Increase Monthly Revenue',
      description: 'Grow monthly recurring revenue through new customer acquisition and retention',
      progress: 75000,
      target: 100000,
      unit: '$',
      deadline: '2024-12-31',
      priority: 'High',
      status: 'Active',
      category: 'Business'
    },
    {
      id: '2',
      title: 'Complete Product Launch',
      description: 'Successfully launch the new product line with all features implemented',
      progress: 8,
      target: 12,
      unit: 'features',
      deadline: '2024-01-15',
      priority: 'High',
      status: 'Active',
      category: 'Product'
    },
    {
      id: '3',
      title: 'Team Training Program',
      description: 'Complete comprehensive training program for all team members',
      progress: 15,
      target: 20,
      unit: 'sessions',
      deadline: '2024-02-28',
      priority: 'Medium',
      status: 'Active',
      category: 'Team'
    },
    {
      id: '4',
      title: 'Customer Satisfaction Score',
      description: 'Achieve and maintain high customer satisfaction ratings',
      progress: 4.2,
      target: 4.5,
      unit: '/5 stars',
      deadline: '2024-03-31',
      priority: 'Medium',
      status: 'Active',
      category: 'Customer'
    },
    {
      id: '5',
      title: 'Code Coverage Improvement',
      description: 'Increase automated test coverage across all repositories',
      progress: 85,
      target: 95,
      unit: '%',
      deadline: '2024-01-31',
      priority: 'Low',
      status: 'Active',
      category: 'Technical'
    },
    {
      id: '6',
      title: 'Documentation Update',
      description: 'Complete overhaul of technical documentation',
      progress: 12,
      target: 12,
      unit: 'docs',
      deadline: '2023-12-15',
      priority: 'Low',
      status: 'Completed',
      category: 'Documentation'
    }
  ]);

  const getProgressPercentage = (progress: number, target: number) => {
    return Math.min((progress / target) * 100, 100);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'text-red-600 dark:text-red-400';
      case 'Medium':
        return 'text-yellow-600 dark:text-yellow-400';
      default:
        return 'text-green-600 dark:text-green-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300';
      case 'Completed':
        return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
      case 'Paused':
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300';
    }
  };

  const activeGoals = goals.filter(goal => goal.status === 'Active');
  const completedGoals = goals.filter(goal => goal.status === 'Completed');

  return (
    <div className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Goals</h1>
            <p className="text-gray-600 dark:text-gray-400">Track your objectives and measure progress</p>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 dark:bg-blue-500 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
            <Plus className="h-4 w-4" />
            <span>New Goal</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <Target className="h-5 w-5" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{activeGoals.length}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Active Goals</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                <CheckCircle className="h-5 w-5" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{completedGoals.length}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400">
                <Clock className="h-5 w-5" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">3</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Due This Month</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                <TrendingUp className="h-5 w-5" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">73%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Avg Progress</p>
          </div>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {goals.map((goal) => (
            <div key={goal.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{goal.title}</h3>
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(goal.status)}`}>
                        {goal.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{goal.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(goal.deadline).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Flag className={`h-4 w-4 ${getPriorityColor(goal.priority)}`} />
                        <span>{goal.priority}</span>
                      </div>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                        {goal.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-1 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {goal.progress}{goal.unit} / {goal.target}{goal.unit}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${getProgressPercentage(goal.progress, goal.target)}%` }}
                    ></div>
                  </div>
                  <div className="mt-1 text-right">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {Math.round(getProgressPercentage(goal.progress, goal.target))}% complete
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goals;