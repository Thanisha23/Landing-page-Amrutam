import Button from "./components/Button";
import Feature from "./components/Feature";
import InfoCards from "./components/InfoCards";
import Navbar from "./components/Navbar";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import SectionThree from "./components/SectionThree";
import StepsCard from "./components/StepsCard";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div
    style={{
     
      width: '100%',
      height: '850px',
      backgroundImage: `linear-gradient(180deg, rgba(24, 24, 24, 0.87) 0%, rgba(34, 34, 34, 0.48) 100%), url('/image1.jpeg')`,
    }}
    className="bg-cover bg-center h-screen px-[21px] text-white"
    
  >
<div className="w-[400px] h-[38px] pt-[145px] text-[20px] font-thin">Namaste, Welcome to Amrutam</div>
<div className="text-[30px] font-semibold mt-[4.5rem] w-[365px] h-[136px] leading-[3.4rem]"><p>Step into Holistic Healing</p>
<p>with <span className="underline underline-offset-8">Ayurveda</span></p>
<p>Book Consultation With</p>
  <p>Certified Experts.</p>
  </div>
  <div className="mt-[106px] text-[17px] text-[#C9C9C9] font-medium">Dive into the world of ayurveda and experience personalized health solutions and holistic. guidance from trusted ayurvedic doctors. anytime, anywhere.</div>
  <div className="mt-[84px]">
    <Button />
  </div>
  </div>
 <Feature />
<SectionThree />
<InfoCards />
<SectionFive />
<SectionSix />
<div className="pt-[62px] text-[#3A643B] text-[32px] font-semibold w-[261.39px] h-[82px] text-center mx-auto">
Our Ayurvedic Approach
</div>
<div className="text-[#323232] text-[16px] text-center w-[302px] h-[126px] pt-[86px] mx-auto">
At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient&apos;s body type, medical history, and current health conditions.
</div>

<div className="pt-[167.5px] mb-[2rem]">
  <StepsCard />
</div>
    </div>
  );
}
