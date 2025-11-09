import React from 'react'
import portBg from "../assets/portfolio/portBg.png"
import backgroundImage from "../assets/HeroBg/BG.png"
import portfolio1 from "../assets/portfolio/portfolio1.svg"
import portfolio2 from "../assets/portfolio/Group 11.png"
import footer from "../assets/portfolio/footer.png";

function PortFolio() {
    return (
        <div className='w-full  md:min-h-screen flex justify-between gap-x-10 px-5 py-6' style={{ backgroundImage: `url(${backgroundImage})`,backgroundSize:"cover",backgroundRepeat:"no-repeat" }}>
            <div className='flex items-center'>
                <img src= {portfolio1} alt="" className='px-4 py-5'/>
            </div>
            <div className='flex flex-col justify-center items-center gap-y-12'>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-2xl'>The Highlight Reel</h1>
                    <p className='text-lg'>Watch the magic we’ve captured</p>
                </div>
                <div>
                    <img src={portfolio2} alt="" className='w-150 h-100'  />
                </div>
            </div>
            <div className='relative flex  items-end'>
                <img src={footer} alt="" className='' />
            </div>
        </div>
    )
}

export default PortFolio;
