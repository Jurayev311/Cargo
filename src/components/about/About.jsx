import React from 'react'
import Title from '../title/Title'
import car from '../../assets/car.png'

const About = () => {
    return (
        <section id='about'>
            <div className='container mx-auto'>
                <Title text="company at a glance" />

                <div className='flex flex-col lg:flex-row items-center justify-center'>
                    <div className='w-full lg:w-1/2 mb-4 lg:mb-0'>
                        <img className='w-full lg:w-[470px] h-auto' src={car} alt="car image" />
                    </div>
                    <div className='w-full lg:w-1/2 text-[16px] font-light'>
                        <p className='mb-2'>
                            Our transportation company with 30 years of experience is your best choice for shipping cargo of any size, storage, packing, or delivering wares to your customers. Our professional employees will take care of your goods, whenever you send them.
                        </p>
                        <p>
                            You are granted complete control over the process of delivery by phone or by our mobile app. Your freight is tracked every step of the way. We provide a high standard of shipping, regardless of its volume. If your company needs to establish a supply chain, we have prepared several readymade solutions with flexible pricing rates for you. Our urgent cargo services offer defined time frames for the convenience of your business. Our supply chain services include shipping, warehousing, packaging, quality control, and distribution.
                        </p>
                        <button className='py-[14px] px-[38px] bg-[#3DB7EF] mt-[37px] text-white cursor-pointer'>
                            <a href="#contact">Contact-Us</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
