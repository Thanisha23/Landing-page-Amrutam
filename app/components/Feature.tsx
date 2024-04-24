import React from 'react'
import Image from 'next/image'
import features from '../lib/features'
const Feature:React.FC = () => {
  return (
   <>
{features.map((feature) => (
        <div key={feature.id} className='w-[100%] h-[122px] border-[1px] relative border-[#E9E9E9] bg-[#FFF7E2]'>
      
       <div className='w-[72px] h-[72px] bg-white flex justify-center items-center rounded-full border border-[#3A643B] absolute top-1/2 left-[6rem] transform -translate-x-1/2 -translate-y-1/2'><Image src={feature.image} width={40} height={40} alt='feature1' /> </div>
        <div className={`font-semibold text-[#3A643B] text-[18.2px] w-[210px] h-[50px] absolute top-1/2 left-[17rem] transform -translate-x-1/2 -translate-y-1/2`}>
        {feature.text}
        </div>
    

        
       
    </div>
    ))}
   </>
  )
}

export default Feature