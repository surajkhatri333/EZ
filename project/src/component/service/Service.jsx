import React from 'react'
import image6 from '../../assets/service/image 6.png'
import image7 from "../../assets/service/image 7.png"
import image8 from "../../assets/service/image 8.png"
import image9 from "../../assets/service/image9.png"
import image10 from "../../assets/service/image10.png";
import image11 from "../../assets/service/image11.png";
import image12 from "../../assets/service/image12.svg";
import vector from "../../assets/service/Vector 5.svg"
import heroBackgroundImage from "../../assets/HeroBg/BG.png"

function Service() {
    return (
        <>
            <div className='relative w-full h-100  md:min-h-screen flex flex-col items-center justify-center px-5 '
                style={{
                    backgroundImage: `url(${heroBackgroundImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            >
                <div className='w-[60%] flex flex-col items-center justify-between gap-10 mt-10'>
                    <div>
                        <div className='flex flex-col items-center'>
                            <h2>The storyboard reveals the breadth of our craft</h2>
                            <img
                                src={vector}
                                alt="iamge bar"
                                className='w-100'
                            />
                        </div>
                    </div>

                    {/* image section  */}
                    <div className='flex flex-row items-center'>
                        <div className='relative items-center'>
                            <img
                                src={image6}
                                alt=""
                                className='absolute w-30'
                            />
                            <img
                                src={image9}
                                alt=""
                            />
                        </div>
                        <div className='relative justify-center'>
                            <img
                                src={image7}
                                alt=""
                                className='absolute w-30 left-10'
                            />
                            <img
                                src={image10}
                                alt=""
                            
                            />
                        </div>
                        <div className='relative justify-center'>
                            <img
                                src={image8}
                                alt=""
                                className='absolute w-30 left-30'
                            />
                            <img
                                src={image11}
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                {/* footer Design  */}
                <img src={image12} alt="" className='w-full absolute bottom-0' />
            </div>

        </>
    )
}

export default Service;
