import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaShieldAlt, FaChartLine, FaUsers } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Bootstrap */}
      <section className="jumbotron text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container">
          <h1 className="display-4 font-bold mb-4">Welcome to ProductHub</h1>
          <p className="lead mb-4">The ultimate platform for modern businesses to scale and succeed</p>
          <Link to="/contact" className="btn btn-light btn-lg px-5 py-3">
            Get Started Free
          </Link>
          <p className="mt-4 text-sm opacity-75">No credit card required</p>
        </div>
      </section>

      {/* Features Section with Tailwind */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ProductHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaRocket, title: 'Lightning Fast', desc: 'Experience blazing fast performance' },
              { icon: FaShieldAlt, title: 'Secure', desc: 'Enterprise-grade security' },
              { icon: FaChartLine, title: 'Analytics', desc: 'Real-time insights and reports' },
              { icon: FaUsers, title: 'Team Collaboration', desc: 'Work together seamlessly' }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <feature.icon className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers worldwide</p>
          <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Start Your Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;