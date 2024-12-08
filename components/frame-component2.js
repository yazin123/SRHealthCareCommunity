import React, { useState } from 'react';
import { 
  Briefcase, Users, TrendingUp, Shield, 
  Server, Activity, DollarSign 
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(true);

  return (
    <div 
      className="relative w-full md:w-[calc(50%-16px)] m-2 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(true)}
    >
      <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="p-6 flex items-center">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <Icon className="text-blue-600" size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isHovered 
            ? 'max-h-48 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="px-6 pt-2 pb-6 bg-blue-50">
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HealthcareServices = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Hospital Administration",
      description: "Comprehensive management strategies to optimize hospital operations, ensuring efficient workflow and resource allocation."
    },
    {
      icon: Users,
      title: "Patient Management",
      description: "Advanced patient tracking and care coordination systems to improve patient experience and healthcare outcomes."
    },
    {
      icon: TrendingUp,
      title: "Strategic Planning",
      description: "Data-driven strategic planning and targeted marketing approaches to enhance hospital visibility and patient engagement."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control processes to maintain high standards of patient care and clinical excellence."
    },
    {
      icon: Server,
      title: "IT Integration",
      description: "Cutting-edge IT solutions to streamline medical records, improve communication, and enhance overall healthcare delivery."
    },
    {
      icon: Activity,
      title: "Facility Management",
      description: "Comprehensive management of medical facilities and advanced equipment to ensure optimal performance and patient safety."
    },
    {
      icon: Users,
      title: "HR Management",
      description: "Strategic HR practices to recruit, develop, and retain top medical and administrative talent."
    },
    {
      icon: DollarSign,
      title: "Financial Management",
      description: "Expert financial strategies to optimize revenue, control costs, and ensure financial sustainability."
    }
  ];

  return (
    <div className=" mx-auto max-w-7xl px-2  py-12 font-lexend-deca" id='services'>
      <div className="text-center  mb-12">
        <h1 className="text-21xl font-bold text-gray-800 mb-4 mq450:text-10xl mq850:text-19xl">Our Expertise</h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          End-to-End Solutions for Efficient, Patient-Centric Healthcare Facilities
        </p>
      </div>
      
      <div className="grid mq850:grid-cols-1 grid-cols-2 gap-3 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      <div className="flex justify-center space-x-4 mt-12">
        <a href='tel:+919447008356' className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center [text-decoration:none]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mr-2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          Get in Touch
        </a>
        <button className="border-2 font-lexend-deca border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors bg-white">
          View Testimonials
        </button>
      </div>
    </div>
  );
};

export default HealthcareServices;