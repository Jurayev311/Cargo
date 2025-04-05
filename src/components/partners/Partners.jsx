import React from 'react';
import Title from '../title/Title';
import amazon from '../../assets/amazon.png'
import axle from '../../assets/axle.png'
import fedex from '../../assets/fedex.png'
import us from '../../assets/us.png'
import ups from '../../assets/ups.png'

const partners = [
  { name: 'Amazon', logo: amazon },
  { name: 'Axle Logistics', logo: axle },
  { name: 'FedEx', logo: fedex },
  { name: 'USPS', logo: us },
  { name: 'UPS', logo: ups },
];

const Partners = () => {
  return (
    <section className="py-12 text-center">
      <Title text="OUR PARTNERS" />
      <div className="flex flex-wrap justify-center items-center gap-8 mt-6 px-4">
        {partners.map((partner, index) => (
          <img key={index} src={partner.logo} alt={partner.name} className="h-16 md:h-20" />
        ))}
      </div>
    </section>
  );
};

export default Partners;
