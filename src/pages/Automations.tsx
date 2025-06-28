import React, { useState } from 'react';
import { 
  Zap, 
  Plus, 
  Play, 
  Pause, 
  Settings,
  Clock,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  MoreHorizontal,
  Edit3,
  Trash2,
  Copy
} from 'lucide-react';

interface Automation {
  id: string;
  name: string;
  description: string;
  trigger: string;
  action: string;
  status: 'active' | 'paused' | 'error';
  lastRun: string;
  runCount: number;
  category: string;
}

const Automations = () => {
  const [automations] = useState<Automation[]>([
    {
      id: '1',
      name: 'Task Assignment Notification',
      description: 'Send Slack notification when a task is assigned to a team member',
      trigger: 'Task assigned',
      action: 'Send Slack message',
      status: 'active',
      lastRun: '2 hours ago',
      runCount: 47,
      category: 'Notifications'
    },
    {
      id: '2',
      name: 'Weekly Status Report',
      description: 'Generate and email weekly project status report every Friday',
      trigger: 'Weekly schedule',
      action: 'Generate report & send email',
      status: 'active',
      lastRun: '3 days ago',
      runCount: 12,
      category: 'Reports'
    },
    {
      id: '3',
      name: 'Overdue Task Reminder',
      description: 'Send reminder notifications for tasks that are past due',
      trigger: 'Task overdue',
      action: 'Send email reminder',
      status: 'paused',
      lastRun: '1 week ago',
      runCount: 23,
      category: 'Reminders'
    },
    {
      id: '4',
      name: 'Project Milestone Alert',
      description: 'Notify stakeholders when project milestones are completed',
      trigger: 'Milestone completed',
      action: 'Send notification',
      status: 'active',
      lastRun: '5 days ago',
      runCount: 8,
      category: 'Milestones'
    },
    {
      id: '5',
      name: 'Budget Threshold Warning',
      description: 'Alert when project budget reaches 80% of allocated amount',
      trigger: 'Budget threshold',
      action: 'Send alert email',
      status: 'error',
      lastRun: 'Failed 1 day ago',
      runCount: 3,
      category: 'Finance'
    },
    {
      id: '6',
      name: 'New Team Member Onboarding',
      description: 'Automatically create onboarding tasks when new team member joins',
      trigger: 'Team member added',
      action: 'Create task list',
      status: 'active',
      lastRun: '2 weeks ago',
      runCount: 5,
      category: 'Onboarding'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
      case 'paused':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300';
      case 'error':
        return 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />;
      case 'paused':
        return <Pause className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />;
      case 'error':
        return <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />;
      default:
        return <Clock className="h-4 w-4 text-gray-400 dark:text-gray-500" />;
    }
  };

  const activeAutomations = automations.filter(a => a.status === 'active').length;
  const pausedAutomations = automations.filter(a => a.status === 'paused').length;
  const errorAutomations = automations.filter(a => a.status === 'error').length;
  const totalRuns = automations.reduce((sum, a) => sum + a.runCount, 0);

  return (
    <div className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Automations</h1>
            <p className="text-gray-600 dark:text-gray-400">Streamline your workflow with automated processes</p>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 dark:bg-blue-500 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
            <Plus className="h-4 w-4" />
            <span>Create Automation</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                <CheckCircle className="h-5 w-5" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{activeAutomations}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Active</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400">
                <Pause className="h-5 w-5" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{pausedAutomations}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Paused</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                <AlertTriangle className="h-5 w-5" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{errorAutomations}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Errors</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <Zap className="h-5 w-5" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{totalRuns}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Runs</p>
          </div>
        </div>

        {/* Automations List */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">All Automations</h3>
          </div>
          
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {automations.map((automation) => (
              <div key={automation.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">{automation.name}</h4>
                      <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(automation.status)}`}>
                        {getStatusIcon(automation.status)}
                        <span className="ml-1 capitalize">{automation.status}</span>
                      </span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
                        {automation.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{automation.description}</p>
                    
                    {/* Trigger and Action Flow */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                        <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-medium text-blue-800 dark:text-blue-300">{automation.trigger}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                      <div className="flex items-center space-x-2 px-3 py-2 bg-green-50 dark:bg-green-900/30 rounded-lg">
                        <Settings className="h-4 w-4 text-green-600 dark:text-green-400" />
                        <span className="text-sm font-medium text-green-800 dark:text-green-300">{automation.action}</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>Last run: {automation.lastRun}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Play className="h-4 w-4" />
                        <span>{automation.runCount} runs</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-2 ml-4">
                    {automation.status === 'active' ? (
                      <button className="p-2 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/30 rounded-lg transition-colors">
                        <Pause className="h-4 w-4" />
                      </button>
                    ) : (
                      <button className="p-2 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30 rounded-lg transition-colors">
                        <Play className="h-4 w-4" />
                      </button>
                    )}
                    <button className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors">
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors">
                      <Copy className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Templates */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Automation Templates</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Get started quickly with pre-built automation templates</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Task Notifications', description: 'Notify team when tasks are assigned or completed', icon: CheckCircle },
                { name: 'Status Reports', description: 'Generate and send weekly project status reports', icon: Clock },
                { name: 'Deadline Reminders', description: 'Send reminders for upcoming task deadlines', icon: AlertTriangle },
                { name: 'Team Onboarding', description: 'Automate new team member setup process', icon: Settings },
                { name: 'Budget Alerts', description: 'Monitor project budgets and send alerts', icon: Zap },
                { name: 'Meeting Scheduling', description: 'Automatically schedule recurring team meetings', icon: Play }
              ].map((template, index) => (
                <div key={index} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/10 cursor-pointer transition-colors">
                  <div className="flex items-center space-x-3 mb-2">
                    <template.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <h4 className="font-medium text-gray-900 dark:text-white">{template.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{template.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automations;