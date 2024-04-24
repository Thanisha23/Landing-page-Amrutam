import React from 'react'
const SectionSix:React.FC = () => {
  return (
    <div
    style={{
     
      width: '100%',
      height: '850px',
      backgroundImage: `linear-gradient(180deg, rgba(24, 24, 24, 0.87) 0%, rgba(34, 34, 34, 0.48) 100%), url('sectionSix.png')`,
    }}
    className="bg-cover bg-center h-screen flex-col justify-center items-center px-[21px] text-white mt-[46px]"
    
  >
<div className='pt-[242px] px-[4.5px]  text-center text-[40px] font-semibold pb-[29px]'>
Ready to restore harmony in your mind, body and spirit?
</div>
<div className='bg-[#3A643B] text-white flex justify-center items-center w-[357px] h-[66px] mx-auto rounded-[16px] text-[22px] font-semibold'>Book a consultation</div>
  </div>
  )
}

export default SectionSix