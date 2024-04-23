import React from 'react'
import { inknutAntique } from '../font'

const Card1:React.FC = () => {
  return (
    <div className='w-[328px] h-[267px] border border-t-4 border-t-[#3A643B] rounded-[20px] mx-auto bg-white'>
        <div className={`pt-[48px] text-[24px] font-semibold text-center flex justify-center items-center text-[#3A643B] ${inknutAntique.className}`}>स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"</div>
        <div className='text-center text-[15px] h-[76px] w-[249px] text-[#3A643B] pt-[19px] mx-auto'>
        [ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]
        </div>
      
    </div>
  )
}

export default Card1
