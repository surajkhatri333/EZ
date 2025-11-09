import React from 'react'
import frame1 from "../assets/About/Group 9.png"
import frame2 from "../assets/About/frame2.svg";
import frame3 from "../assets/About/fram3.svg";
import heroBackgroundImage from "../assets/HeroBg/BG.png"
import vector1 from "../assets/About/Vector1.svg";
import vector2 from "../assets/About/Vector2.svg";
import vector3 from "../assets/About/Vector3.svg"
import { useNavigate } from 'react-router';

function AboutTeam() {
    const navigate = useNavigate();
    return (
        <>
            <div
                className="w-full min-h-[40vh]  bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url(${heroBackgroundImage})`
                }}
            >
                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-y-10 md:gap-x-10 py-10 sm:py-16 md:py-20 px-5 sm:px-10 md:px-20">

                    {/* Left Section */}
                    <div className="w-full md:w-[40vw] flex flex-col gap-y-10 items-center relative">
                        <img
                            className="w-4/5 sm:w-3/4 md:w-[90%] h-auto"
                            src={frame1}
                            alt="Frame1"
                        />
                        <img
                            src={frame2}
                            alt="Frame2"
                            className="relative bottom-0 w-3/5 sm:w-1/2 md:w-[60%] h-auto  md:mt-[-60px]"
                        />
                    </div>

                    {/* Right Section */}
                    <div className="w-screen md:w-[40vw] flex flex-col justify-center items-center gap-y-6 sm:gap-y-8 md:gap-y-10 mt-10 md:mt-20">

                        {/* Film Maker */}
                        <div className="flex flex-col items-center text-center">
                            <span className="text-sm sm:text-base md:text-lg font-medium">Film Maker</span>
                            <img
                                src={vector1}
                                alt="Vector1"
                                className="w-16 sm:w-24 md:w-32 h-auto"
                            />
                        </div>

                        {/* Middle Section */}
                        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-y-6 sm:gap-x-7">

                            {/* Left Vector */}
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={vector3}
                                    alt="Vector3"
                                    className="w-16 sm:w-24 md:w-28 h-auto"
                                />
                                <span className="text-sm sm:text-base md:text-lg font-medium">Branding Experts</span>
                            </div>

                            {/* Center Frame */}
                            <img
                                className="w-32 sm:w-48 md:w-60 h-auto"
                                src={frame3}
                                alt="Frame3"
                            />

                            {/* Right Vector */}
                            <div className="flex flex-col items-center text-center">
                                <span className="text-sm sm:text-base md:text-lg font-medium">Art Curators</span>
                                <img
                                    src={vector2}
                                    alt="Vector2"
                                    className="w-16 sm:w-24 md:w-28 h-auto"
                                />
                            </div>
                        </div>

                        {/* Button Section */}
                        <div className="w-full flex flex-col items-center text-center px-2 py-2">
                            <p className="text-xs sm:text-base md:text-2xl max-w-md">
                                Take a closer look at the stories V bring to you
                            </p>
                            <button className="text-xs sm:text-base md:text-2xl hover:bg-green-700 bg-[#F15D2B] text-white rounded-full px-4 py-2 mt-3 cursor-pointer"
                            onClick={() => navigate("/portfolio")}
                            >
                                View Portfolio
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutTeam
