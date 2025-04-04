import React from 'react'
import line from '../../assets/line.svg'

const Title = ({text}) => {
    return (
        <div className='container mx-auto'>
            <div className='text-center mt-[96px] mb-[76px]'>
                <h2 className='text-4xl font-bold uppercase'>{text}</h2>
                <div className='flex items-center justify-center mt-6'><img src={line} alt="line image" /></div>
            </div>
        </div>
    )
}

export default Title