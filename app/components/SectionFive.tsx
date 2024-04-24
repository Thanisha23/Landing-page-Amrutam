import React from 'react'
import Card1 from './Card1'
import Image from 'next/image'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
const SectionFive:React.FC = () => {
  return (
    <div className='h-[2320px] pt-[62px] w-[100%] bg-[#FFFAEC]'>
        <div className=' text-[#3A643B] text-[32px] font-bold flex justify-center items-center w-[80%] mx-auto text-center pt-[61px] pb-[2.5rem] '>What sets Ayurvedic consultations apart?</div>
        <Card1 />
        <div className='mt-[24px] rounded-[20px] flex justify-center items-center'>
            <Image src="/card1Image.png" width={328} height={285} alt='card Image'/>
        </div>
        <Card2 />
        <div className='mt-[24px] rounded-[20px] flex justify-center items-center'>
            <Image src="/card2Image.png" width={328} height={285} alt='card Image'/>
        </div>
        <Card3 />
        <div className='mt-[24px] rounded-[20px] flex justify-center items-center'>
            <Image src="/card3Image.png" width={328} height={285} alt='card Image'/>
        </div>
        <Card4 />
    </div>
  )
}

export default SectionFive