import React from 'react';
import { FaChartLine, FaUsers, FaFileAlt, FaBell, FaCalendar, FaTasks, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const DashboardPage = () => {
  const stats = [
    { label: 'Total Revenue', value: '$54,239', change: '+12.5%', icon: FaChartLine, color: 'bg-green-500', trend: 'up' },
    { label: 'Active Users', value: '8,549', change: '+23.1%', icon: FaUsers, color: 'bg-blue-500', trend: 'up' },
    { label: 'Projects', value: '127', change: '-3.2%', icon: FaFileAlt, color: 'bg-purple-500', trend: 'down' },
    { label: 'Notifications', value: '12', change: '+5', icon: FaBell, color: 'bg-yellow-500', trend: 'up' }
  ];

  const recentActivity = [
    { user: 'John Doe', action: 'created a new project', time: '2 minutes ago', project: 'Website Redesign' },
    { user: 'Jane Smith', action: 'completed task', time: '15 minutes ago', project: 'Mobile App Development' },
    { user: 'Mike Johnson', action: 'uploaded files', time: '1 hour ago', project: 'Marketing Campaign' },
    { user: 'Sarah Wilson', action: 'left a comment', time: '3 hours ago', project: 'Q4 Planning' }
  ];

  const upcomingTasks = [
    { task: 'Review Q4 budget', due: 'Today', priority: 'High' },
    { task: 'Team meeting', due: 'Tomorrow', priority: 'Medium' },
    { task: 'Client presentation', due: 'Oct 25', priority: 'High' },
    { task: 'Update documentation', due: 'Oct 28', priority: 'Low' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your projects.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center text-white`}>
                  <stat.icon size={24} />
                </div>
                <span className={`text-sm font-semibold flex items-center ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Charts Section with Bootstrap */}
        <div className="row mb-8">
          <div className="col-md-8 mb-4">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
                <p className="text-gray-500">Chart component would go here (using Recharts or similar)</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                  Create New Project
                </button>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
                  Invite Team Members
                </button>
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition">
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity and Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <FaCalendar className="text-gray-400" />
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">{activity.user[0]}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-semibold">{activity.user}</span> {activity.action}
                      <span className="text-blue-600"> {activity.project}</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Tasks */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Upcoming Tasks</h3>
              <FaTasks className="text-gray-400" />
            </div>
            <div className="space-y-4">
              {upcomingTasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="font-semibold">{task.task}</p>
                    <p className="text-sm text-gray-500">Due: {task.due}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    task.priority === 'High' ? 'bg-red-100 text-red-600' :
                    task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    {task.priority}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-gray-100 text-gray-600 py-2 px-4 rounded hover:bg-gray-200 transition">
              View All Tasks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;