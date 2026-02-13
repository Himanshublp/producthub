import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes } from 'react-icons/fa';

const PricingPage = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$29',
      period: 'per month',
      description: 'Perfect for individuals and small projects',
      features: [
        { name: '5 Projects', available: true },
        { name: '10 GB Storage', available: true },
        { name: 'Basic Analytics', available: true },
        { name: 'Email Support', available: true },
        { name: 'API Access', available: false },
        { name: 'Advanced Security', available: false },
        { name: 'Custom Domain', available: false }
      ],
      buttonText: 'Get Started',
      buttonClass: 'bg-gray-800 text-white hover:bg-gray-900',
      popular: false
    },
    {
      name: 'Pro',
      price: '$79',
      period: 'per month',
      description: 'Best for growing businesses',
      features: [
        { name: 'Unlimited Projects', available: true },
        { name: '100 GB Storage', available: true },
        { name: 'Advanced Analytics', available: true },
        { name: 'Priority Support', available: true },
        { name: 'API Access', available: true },
        { name: 'Advanced Security', available: true },
        { name: 'Custom Domain', available: false }
      ],
      buttonText: 'Start Free Trial',
      buttonClass: 'bg-blue-600 text-white hover:bg-blue-700',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: 'per month',
      description: 'For large organizations with custom needs',
      features: [
        { name: 'Unlimited Projects', available: true },
        { name: 'Unlimited Storage', available: true },
        { name: 'Custom Analytics', available: true },
        { name: '24/7 Dedicated Support', available: true },
        { name: 'API Access', available: true },
        { name: 'Advanced Security', available: true },
        { name: 'Custom Domain', available: true }
      ],
      buttonText: 'Contact Sales',
      buttonClass: 'bg-gray-800 text-white hover:bg-gray-900',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. No hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition ${plan.buttonClass}`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
                <div className="border-t border-gray-200 p-8">
                  <h4 className="font-semibold mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        {feature.available ? (
                          <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                        ) : (
                          <FaTimes className="text-red-500 mr-3 flex-shrink-0" />
                        )}
                        <span className={feature.available ? 'text-gray-700' : 'text-gray-400'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Can I change plans later?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
              },
              {
                q: 'Is there a long-term contract?',
                a: 'No, all our plans are month-to-month. You can cancel anytime with no penalties.'
              },
              {
                q: 'Do you offer discounts for annual billing?',
                a: 'Yes, we offer a 20% discount when you choose annual billing for any plan.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and bank transfers for enterprise plans.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;