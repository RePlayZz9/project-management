import React from 'react';
import { 
  TrendingUp, 
  Users, 
  CheckCircle, 
  Clock,
  ArrowUpRight,
  Calendar,
  Target,
  Activity
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Tasks',
      value: '142',
      change: '+12%',
      trend: 'up',
      icon: CheckCircle,
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      title: 'In Progress',
      value: '28',
      change: '+8%',
      trend: 'up',
      icon: Clock,
      color: 'text-orange-600 dark:text-orange-400'
    },
    {
      title: 'Completed',
      value: '89',
      change: '+23%',
      trend: 'up',
      icon: Target,
      color: 'text-green-600 dark:text-green-400'
    },
    {
      title: 'Team Members',
      value: '12',
      change: '+2',
      trend: 'up',
      icon: Users,
      color: 'text-purple-600 dark:text-purple-400'
    }
  ];

  const recentTasks = [
    { name: 'Design new landing page', project: 'Website Redesign', status: 'In Progress', assignee: 'Sarah Chen' },
    { name: 'Implement user auth', project: 'Auth System', status: 'Pending', assignee: 'Mike Johnson' },
    { name: 'Write API docs', project: 'Documentation', status: 'Complete', assignee: 'Alex Rodriguez' },
    { name: 'Set up CI/CD', project: 'DevOps', status: 'Blocked', assignee: 'Emily Davis' }
  ];

  const upcomingDeadlines = [
    { task: 'Design review meeting', date: 'Today, 2:00 PM', priority: 'High' },
    { task: 'Submit quarterly report', date: 'Tomorrow', priority: 'Medium' },
    { task: 'Client presentation', date: 'Dec 18', priority: 'High' },
    { task: 'Team retrospective', date: 'Dec 20', priority: 'Low' }
  ];

  return (
    <div className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Welcome back! Here's what's happening with your projects.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-gray-50 dark:bg-gray-700 ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className="flex items-center text-green-600 dark:text-green-400 text-sm font-medium">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  {stat.change}
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Tasks */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Tasks</h3>
                <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                  View all
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentTasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-white text-sm">{task.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{task.project} • {task.assignee}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      task.status === 'Complete' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' :
                      task.status === 'In Progress' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' :
                      task.status === 'Pending' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300' :
                      'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                    }`}>
                      {task.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Upcoming Deadlines</h3>
                <Calendar className="h-5 w-5 text-gray-400 dark:text-gray-500" />
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {upcomingDeadlines.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-white text-sm">{item.task}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.date}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      item.priority === 'High' ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300' :
                      item.priority === 'Medium' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300' :
                      'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
                    }`}>
                      {item.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Activity Chart Placeholder */}
        <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Activity Overview</h3>
              <Activity className="h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
          </div>
          <div className="p-6">
            <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                <p className="text-gray-500 dark:text-gray-400">Activity chart would go here</p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Integration with charting library needed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;