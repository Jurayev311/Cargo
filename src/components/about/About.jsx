import React from 'react'
import Title from '../title/Title'
import car from '../../assets/car.png'

const About = () => {
    return (
        <section>
            <div className='container mx-auto'>
                <Title text="company at a glance" />

                <div className='flex items-center justify-center'>
                    <div className='w-1/2'>
                        <img className='w-[470px] h-[228px]' src={car} alt="car image" />
                    </div>
                    <div className='w-1/2 text-[16px] font-light'>
                        <p className='mb-2'>Our transportation company with 30 years of experience is you best choice for shipping cargo of any size, storage, packing or delivering wares to your customers. Our professional employees will take care of your goods, whenever you send them.</p>
                        <p>You are granted complete control over the process of delivery by phone or by our mobile app. Your freight is tracked every step of the way. We provide a high standard of shipping, regardless of its volume. If your company needs to establish a supply chain, we have prepared several readymade solutions with flexible pricing rates for you. Our urgent cargo services offer defined time frames for convenience of your business. Our supply chain services include shipping, warehousing, packaging, quality control and distribution.</p>
                        <button className='py-[14px] px-[38px] bg-[#3DB7EF] mt-[37px] text-white cursor-pointer'>Contact-Us</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About