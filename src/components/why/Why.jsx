import React from 'react';
import { FaThumbsUp, FaUsers, FaLock } from 'react-icons/fa';
import Title from '../title/Title';

const Why = () => {
  const items = [
    {
      icon: <FaThumbsUp className="text-white text-3xl" />, 
      title: 'Best Service',
      description: 'Our mission is to attract and retain customers by providing Best in Class transportation solutions and fostering a profitable, disciplined culture of safety, service, and trust.'
    },
    {
      icon: <FaUsers className="text-white text-3xl" />, 
      title: 'Reputation',
      description: 'We have established a strong presence in the transportation industry. Our award-winning services earn a reputation for quality and excellence that few can rival.'
    },
    {
      icon: <FaLock className="text-white text-3xl" />, 
      title: 'Safety & Security',
      description: 'Safety for our employees, customers and motoring public will always remain our primary focus in all the policies, procedures and programs that govern our business.'
    }
  ];

  return (
    <section className="bg-[#0F1E3B] text-white py-12 text-center mt-[100px]">
      <Title text="WHY CHOOSE US" />
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-6 px-4 md:px-16">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center max-w-xs text-center">
            <div className="bg-blue-500 p-4 rounded-full mb-4">{item.icon}</div>
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Why;
