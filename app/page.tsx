import Button from "./components/Button";
import Feature from "./components/Feature";
import InfoCards from "./components/InfoCards";
import Navbar from "./components/Navbar";
import SectionFive from "./components/SectionFive";
import SectionThree from "./components/SectionThree";


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
    className="bg-cover px-[21px] text-white"
    
  >
<div className="w-[400px] h-[38px] pt-[115px] text-[16px] font-thin">Namaste, Welcome to Amrutam</div>
<div className="text-[24px] font-semibold mt-[3.5rem] w-[365px] h-[136px] leading-[2.8rem]"><p>Step into Holistic Healing</p>
<p>with <span className="underline underline-offset-8">Ayurveda</span></p>
<p>Book Consultation With</p>
  <p>Certified Experts.</p>
  </div>
  <div className="mt-[56px] text-[14px] text-[#C9C9C9] font-medium">Dive into the world of ayurveda and experience personalized health solutions and holistic. guidance from trusted ayurvedic doctors. anytime, anywhere.</div>
  <div className="mt-[20px]">
    <Button />
  </div>
  </div>
 <Feature />
<SectionThree />
<InfoCards />
<SectionFive />
    </div>
  );
}
