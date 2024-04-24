import React from 'react'

const StepsCard:React.FC = () => {
  return (
    <div className='w-[290px] h-[315px] bg-[#FFF7E2] border border-t-4 border-t-[#3A643B] rounded-[20px] mx-auto '>
   <div className='mt-[28px] w-[90px] h-[90px] rounded-full flex justify-center items-center mx-auto font-semibold border-[2px] border-[#3A643B] text-white text-[48px] bg-[#7C9675]'>1</div>
  <div className='mt-[24px] text-center mx-auto w-[253px] h-[31px] text-[#3A643B] font-semibold'>Make Appointment</div>
  <div className='mt-[8px] w-[220px] h-[95px] text-center mx-auto text-[#2E2E2E] text-[16px]'>You must make an appointment in advance, to choose the service and date.</div>
</div>
  )
}

export default StepsCard