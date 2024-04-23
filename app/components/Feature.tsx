import React from 'react'
import Image from 'next/image'
import features from '../lib/features'
const Feature:React.FC = () => {
  return (
   <>
{features.map((feature) => (
        <div key={feature.id} className='w-[100%] h-[122px] flex justify-center items-center border-[1px] border-[#E9E9E9] bg-[#FFF7E2] gap-8'>
        <div className='w-[72px] h-[72px] bg-white flex justify-center items-center rounded-full border border-[#3A643B]'><Image src={feature.image} width={40} height={40} alt='feature1' /> </div>
        <div className={`font-semibold text-[#3A643B] text-[18.2px] w-[${feature.width}px] h-[50px]`}>
        {feature.text}
        </div>

        
       
    </div>
    ))}
   </>
  )
}

export default Feature