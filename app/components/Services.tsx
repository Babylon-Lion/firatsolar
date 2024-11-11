// components/ServicesSection.tsx
import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-20 w-full" id="services">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold leading-tight mb-8 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Consultation and Assessment</h3>
            <p className="leading-normal text-lg">
              Expert site assessments and consultations to determine the best solar solutions for your needs.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Installation Services</h3>
            <p className="leading-normal text-lg">
              Professional installation of solar panels, inverters, and other components to ensure safety and efficiency.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Maintenance and Support</h3>
            <p className="leading-normal text-lg">
              Regular maintenance and technical support to keep your solar systems running smoothly.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Energy Audits</h3>
            <p className="leading-normal text-lg">
              Comprehensive energy audits to help you understand your energy usage and identify savings opportunities.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Financing and Incentives</h3>
            <p className="leading-normal text-lg">
              Assistance with finding financing options and incentives for solar installations.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Monitoring and Management</h3>
            <p className="leading-normal text-lg">
              Monitoring services to track the performance of your solar systems and optimize energy production.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
