import React from 'react'
import Image from 'next/image'
const SectionThree:React.FC = () => {
  return (
    <div className='pt-[70px] px-[46px] flex-col justify-center items-center mb-[9px]'>
        <div className='text-[32px] font-bold text-[#3A643B] text-center'> Discover Ayurveda&apos;s Magic With Us</div> 
        <div className='pt-[16px] text-center text-[14px] text-[#666666]'>
        At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient's body type, medical history, and current health conditions.
        </div>
        <div className='flex justify-center items-center pt-[40px]'><Image width={204.4} height={210.53} src="/yoga.png" alt='yoga'/></div>
    </div>
  )
}

export default SectionThree