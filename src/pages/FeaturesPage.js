import React from 'react';
import { FaCloud, FaMobile, FaLock, FaSync, FaChartPie, FaHeadset } from 'react-icons/fa';

const FeaturesPage = () => {
  const features = [
    {
      icon: FaCloud,
      title: 'Cloud Integration',
      description: 'Seamlessly integrate with all major cloud providers including AWS, Google Cloud, and Azure.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: FaMobile,
      title: 'Mobile Ready',
      description: 'Fully responsive design that works perfectly on all devices - desktop, tablet, and mobile.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: FaLock,
      title: 'Advanced Security',
      description: 'End-to-end encryption, two-factor authentication, and regular security audits.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: FaSync,
      title: 'Real-time Sync',
      description: 'Instant synchronization across all your devices and team members.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: FaChartPie,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with customizable reports and insights.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: FaHeadset,
      title: '24/7 Support',
      description: 'Round-the-clock customer support with dedicated account managers.',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Powerful Features for Modern Business</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Everything you need to manage, grow, and scale your business in one integrated platform.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`${feature.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table using Bootstrap */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Feature Comparison</h2>
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-4">Feature</th>
                  <th className="p-4">Basic</th>
                  <th className="p-4">Pro</th>
                  <th className="p-4">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3">Cloud Storage</td>
                  <td className="p-3 text-center">10 GB</td>
                  <td className="p-3 text-center">100 GB</td>
                  <td className="p-3 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-3">Team Members</td>
                  <td className="p-3 text-center">5</td>
                  <td className="p-3 text-center">20</td>
                  <td className="p-3 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-3">API Access</td>
                  <td className="p-3 text-center">Limited</td>
                  <td className="p-3 text-center">Full</td>
                  <td className="p-3 text-center">Full + Custom</td>
                </tr>
                <tr>
                  <td className="p-3">Support</td>
                  <td className="p-3 text-center">Email</td>
                  <td className="p-3 text-center">Priority</td>
                  <td className="p-3 text-center">24/7 Dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;