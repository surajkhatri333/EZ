import React from 'react';
import film from '../../assets/Film.png';
import heroMandala from '../../assets/EZ Labs Assignment/Hero Mandala.svg';
import scroll from "../../assets/EZ Labs Assignment/Scroll.png";
import backgroundImage from "../../assets/HeroBg/BG.png";

function MainHero() {
  return (
    <section className="w-full  flex flex-col md:flex-row items-center justify-between px-10 md:px-20 overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
    >

      {/* Left Image Section */}
      <div className="relative w-full  md:w-1/2 flex items-center justify-center">
        {/* Mandala Background */}
        <img
          src={heroMandala}
          alt="Mandala Background"
          className="w-[80%] max-w-[400px] opacity-70"
        />
        {/* Film Image centered inside Mandala */}
        <img
          src={film}
          alt="Film reel"
          className="absolute w-[40%] max-w-[200px]"
        />
        <img
          src={scroll}
          alt=""
          className="absolute bottom-0  left-10 w-30  cursor-pointer"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-6 md:gap-10 text-center md:text-left mt-7 md:mt-9 pb-10">
        <p className="text-5xl md:text-5xxl font-instrumental p-5">
          Varnan is where stories find their voice and form
        </p>

        <p className="text-lg text-center text-[#F15D2B] font-halant">
          Films • Brands • Art
        </p>

        <p className="text-gray-600 text-center md:text-lg  font-island max-w-[90%] mx-auto mt-20 md:mx-0">
          Since 2009, V’ve been telling stories — stories of people, their journeys, and the places that shape them.
          Some begin in polished boardrooms, others in humble village squares. But every story starts the same way —
          by listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what
          truly matters. V doesn’t just tell stories — V honors them.
        </p>
      </div>

    </section>
  );
}

export default MainHero;
