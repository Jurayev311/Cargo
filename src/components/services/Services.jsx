import React from 'react'
import Title from '../title/Title'
import car1 from '../../assets/car1.png'
import car2 from '../../assets/car2.png'
import car3 from '../../assets/car3.png'
import car4 from '../../assets/car4.png'
import car5 from '../../assets/car5.png'
import car6 from '../../assets/car6.png'

const servicesData = [
    { title: 'tarnsportation', image: car1 },
    { title: 'Logistics', image: car2 },
    { title: 'Towing Service', image: car3 },
    { title: 'Maintenance Leasing', image: car4 },
    { title: 'Distribution Services', image: car5 },
    { title: 'Storage', image: car6 },
]

const Services = () => {
    return (
        <section>
            <div className='bg-[#F5F5F5] pt-[60px] mt-[100px]'>
                <Title text='our services' />
                <div className='flex items-center justify-center text-center pb-[49px]'>
                    <p className='w-[750px] flex items-center justify-center'>Our transportation company has been offering a vast set of reliable solutions for businesses and individuals all over the world since our establishment.</p>
                </div>

                <div className='grid grid-cols-3 gap-[30px] container mx-auto'>
                {
                    servicesData?.map((service, index) => (
                        <div key={index}>
                            <div className='relative'><img src={service.image} alt={service.title} className='w-[369px] h-[250px]' />
                                <div className='absolute bottom-5 left-0 py-1 px-3 bg-[#3DB7EF] clip-shape'>
                                    <h2 className='text-white font-bold text-[16px] rounded-[2px]'>{service.title}</h2>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </section>
    )
}

export default Services