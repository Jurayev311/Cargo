import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Title from '../title/Title';
import news1 from '../../assets/news1.png'
import news2 from '../../assets/news2.png'
import news3 from '../../assets/news3.png'

const newsItems = [
  {
    image: news1,
    title: 'Town Cargo Expands to New Routes!',
    date: 'February 5, 2025, 10:00 AM',
    description:
      'Town Cargo is excited to announce the expansion of our trucking routes! We are now covering more regions to ensure faster and more efficient deliveries. Our commitment to reliable logistics continues to grow as we reach new destinations.',
  },
  {
    image: news2,
    title: 'How to Reduce Transportation Costs in 2025',
    date: 'February 3, 2025, 14:45 PM',
    description:
      'Looking to optimize your supply chain? Our logistics experts share five key strategies to cut down transportation costs while maintaining fast and secure deliveries. Read on to discover how smart planning and route optimization can benefit your business.',
  },
  {
    image: news3,
    title: 'Behind the Wheel: A Day in the Life of a Town Cargo Driver',
    date: 'January 28, 2025, 08:30 AM',
    description:
      'Ever wondered what it’s like to be a professional truck driver? Take a journey with one of our experienced drivers as they navigate long highways, manage schedules, and ensure your goods arrive safely.',
  },
];

const News = () => {
  return (
    <section className="py-12 text-center container mx-auto">
      <Title text="LATEST NEWS" />
      <div className="grid md:grid-cols-3 gap-8 mt-6 px-4 md:px-16">
        {newsItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden text-left">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-blue-600 font-bold text-lg mb-2">{item.title}</h3>
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <FaRegCalendarAlt className="mr-2" />
                {item.date}
              </div>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;