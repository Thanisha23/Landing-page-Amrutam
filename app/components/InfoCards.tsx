import React from 'react'
import Image from 'next/image'
import info from '../lib/infoCard'
const InfoCards:React.FC = () => {
  return ( 
<div className='flex justify-center items-center pb-[5rem]'>
<div className='px-[14px]  grid grid-cols-2 gap-[27px]'>  
  {info.map((infoCard) => (
    <div key={infoCard.id} className='py-[11px]  text-center w-[160px] h-[225px] rounded-[12px] border border-[#E4E4E4] relative'>
    <Image className='mx-auto' height={59} width={63} src={infoCard.image} alt='info1' />
  <h1 className='text-[15px] font-bold absolute top-[6rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140px]'>{infoCard.heading}</h1>
  <h3 className='text-[#6D6B6B] text-[14px]  text-center font-medium absolute top-[10.5rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140px]'>{infoCard.content}</h3>
  </div>
  ))}
</div>

</div>
  )
}

export default InfoCards