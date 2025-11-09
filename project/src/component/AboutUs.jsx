// import React from 'react'
// import bgImage from "../assets/HeroBg/BG.png"
// import about1 from "../assets/About/about1.png";
// import about2 from "../assets/About/about2.png";
// import about3 from "../assets/About/about3.png";
// import about4 from "../assets/About/about4.png";
// import about5 from "../assets/About/about5.png";
// function AboutUs() {
//     return (
//         <>
//             <div className='w-full h-auto justify-center'
//                 style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}
//             >
//                 <div className='flex justify-between'>
//                     {/* left part */}
//                     <div className='md:w-[50vw] flex flex-col items-center gap-y-10 mt-30 '>
//                         {/* first section  */}
//                         <div>
//                             <h3>A montage of familiar faces and names</h3>
//                         </div>
//                         {/* second section */}
//                         <div>
//                             <p className='w-50 text-sm'>Some stories come from the biggest names. Others begin with bold, rising voices.
//                                 We’ve been fortunate to walk alongside both - listening, creating, and building stories that matter</p>
//                         </div>
//                         {/* third section  */}
//                         <div className='relative flex p-5'>
//                             <img
//                                 src={about2}
//                                 alt=""
//                                 className='relative w-30 h-30'
//                             />
//                             <img
//                                 src={about1}
//                                 alt=""
//                                 className='absolute w-30 h-30  left-50'
//                             />
//                             <img
//                                 src={about3}
//                                 alt=""
//                                 className='absolute w-30 h-30 left-110'
//                             />
//                         </div>
//                     </div>

//                     {/* right part */}
//                     <div className='flex flex-col items-center mt-15'>
//                         <div>
//                             <p className='text-3xl'>
//                                 Every project is more than just a brief - it’s a new chapter waiting to be written.
//                                 Together, we've crafted tales that inspire, connect, and endure.
//                             </p>
//                         </div>
//                         <div className='relative'>
//                             <img
//                                 src={about4}
//                                 alt=""
//                                 className='w-40 '
//                             />
//                             <img
//                                 src={about5}
//                                 alt=""
//                                 className='absolute w-[60%]'
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default AboutUs





import React from 'react'
import bgImage from "../assets/HeroBg/BG.png"
import about1 from "../assets/About/about1.png";
import about2 from "../assets/About/about2.png";
import about3 from "../assets/About/about3.png";
import about4 from "../assets/About/about4.png";
import about5 from "../assets/About/about5.png";

function AboutUs() {
    return (
        <>
            <div
                className="w-full h-auto bg-cover bg-no-repeat flex items-center justify-center  px-4 md:px-10"
                style={{
                    backgroundImage: `url(${bgImage})`,
                }}
            >
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 mt-20">

                    {/* LEFT SECTION */}
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-8">
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 p-3">
                            A montage of familiar faces and names
                        </h3>

                        <p className="w-[70%] text-sm md:text-base text-center text-gray-600">
                            Some stories come from the biggest names. Others begin with bold, rising voices.
                            We’ve been fortunate to walk alongside both — listening, creating, and building stories that matter.
                        </p>

                        
                        <div className="relative w-100 flex  mt-6">
                            <img
                                src={about2}
                                alt="About2"
                                className="w-24 h-24 md:w-32 md:h-32 rounded-xl"
                            />
                            <img
                                src={about1}
                                alt="About1"
                                className="absolute left-16 md:left-20 w-24 h-24 md:w-32 md:h-32 rounded-xl"
                            />
                            <img
                                src={about3}
                                alt="About3"
                                className="absolute left-32 md:left-40 w-24 h-24 md:w-32 md:h-32 rounded-xl"
                            />
                        </div>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-between md:items-end text-center md:text-left gap-8">
                        <p className="text-lg md:text-3xl text-gray-800 leading-relaxed px-2 md:px-0">
                            Every project is more than just a brief — it’s a new chapter waiting to be written.
                            Together, we've crafted tales that inspire, connect, and endure.
                        </p>

                        {/* IMAGE OVERLAY */}
                        <div className="relative w-56 md:w-80 flex ">
                            <img
                                src={about4}
                                alt="About4"
                                className="w-full rounded-lg shadow-lg"
                            />
                            <img
                                src={about5}
                                alt="About5"
                                className="absolute top-6 left-6 w-[70%] rounded-lg shadow-md"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutUs

