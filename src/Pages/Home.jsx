import React from 'react'
import Navbar from '../Components/Navbar'
import ScrollIndicator from '../Components/ScrollIndicator'
// import rightarrow from "../Images/right-arrow-svgrepo-com.svg"

import img1 from "../Images/svg-1.svg"

import Hero from '../Components/Hero'
import Cardpart2 from '../Components/Cardpart2'
import Cryptop03 from '../Components/Cryptop03'
import Cryptop04 from '../Components/Cryptop04'
import Cryptop05 from '../Components/Cryptop05'
import Cryptop06 from '../Components/Cryptop06'
import Cryptop7 from '../Components/Cryptop7'
function Home() {
    return (
        <div className='h-[100%] w-[100vw]  bg-darkblue-100 overflow-hidden'>
            <Navbar />
            <ScrollIndicator left="5%" right="auto" ballOffset="15" />
            <ScrollIndicator left="35%" right="auto" ballOffset="30" />
            <ScrollIndicator left="auto" right="35%" ballOffset="12" />
            <ScrollIndicator left="auto" right="5%" ballOffset="20" />

            <div className='grid grid-cols-8  gap-4 h-[100vh] w-[100%]'>


                {/* Section 2: Other Content */}
                <div className="col-span-8">
                    <h1 className="absolute top-[15%] sm:top-[32.313%] sm:left-[7%] left-[5%] text-[5rem] tracking-[-3px] leading-[4.688rem] font-bold font-inherit text-white z-[6] mq450:text-[1.5rem] mq450:leading-[1.875rem] mq1050:text-[2.5rem] mq1050:leading-[2.813rem] text-justify">
                        <p className="m-0">Crypto blockchain</p>
                        <p className="m-0">revolution is here</p>
                    </h1>

                    <h3 className="absolute bottom-[45.188%] left-[7%] sm:bottom-[40%] sm:text-[1.2rem] leading-[1.625rem] font-medium font-inherit z-[1] text-white opacity-80">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetuer adipis cing
                        </p>
                        <p className="m-0">diam nonummy nibhie euismod tincidunt utlaoreet.</p>
                    </h3>

                    <button className="cursor-pointer py-[1.375rem] pr-[1.938rem] pl-[2.5rem] bg-tomato w-[192.4px] absolute bottom-[37.25%] sm:bottom-[25.25%] left-[7%] rounded-3xs box-border overflow-hidden shrink-0 flex flex-row items-end justify-start gap-[0.606rem] z-[1] border-[2px] border-solid border-tomato">
                        <div className="relative text-[0.875rem] tracking-[0.42px] leading-[0.875rem] font-semibold font-montserrat text-white text-left inline-block min-w-[81.7px]">
                            Read More
                        </div>
                        <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                            <img
                                className="w-[26px] h-[9px] relative overflow-hidden shrink-0"
                                alt=""
                                src={img1}
                            />
                        </div>
                    </button>
                    <button className="cursor-pointer py-[1.375rem] pr-[1.938rem] pl-[2.5rem] bg-white w-[198.6px] absolute bottom-[37.25%] sm:bottom-[25.25%] left-[52.4%] sm:left-[22.4%] rounded-3xs box-border overflow-hidden shrink-0 flex flex-row items-end justify-start gap-[0.606rem] z-[1] border-[2px] border-solid border-white">
                        <div className="relative text-[0.875rem] tracking-[0.42px] leading-[0.875rem] font-semibold font-montserrat text-midnightblue text-left inline-block min-w-[87.9px]">
                            Get Innovio
                        </div>
                        <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem] opacity-100 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-[-1.5rem]">
                            <img
                                className="w-[26px] h-[9px] relative overflow-hidden shrink-0"
                                alt=""
                                src={img1}
                            />
                        </div>
                    </button>
                </div>

                {/* Section 1: Hero */}
                <div className="col-span-4  flex justify-center items-center">
                    <div className="max-w-full max-h-full overflow-hidden">
                        <Hero/>
                    </div>
                </div>
            </div>


            <div className='flex sm:flex-row flex-col flex-wrap sm:mt-[0rem] mt-[15rem] gap-[23rem]'>
                <div className='sm:ml-[6.6rem] ml-[1.55rem]'>
                    <Cardpart2 name={"Use network to buy & sell"} name1={"shares"} />
                </div>

                <div className='sm:ml-[5.6rem] ml-[1.55rem]'>
                    <Cardpart2 name={"Introducing the"} name1={"marketplace sistem"} />
                </div>

                <div className='sm:ml-[5.6rem] ml-[1.55rem]'>
                    <Cardpart2 name={"Powering data for the"} name1={"new blockchain"} />
                </div>
            </div>

            <div className='mt-[25rem]'>
                <Cryptop03 />
            </div>

            <div className='p-5 sm:mt-[70rem] mt-[90rem]'>
                <Cryptop04 />
            </div>

            <div className='mt-[10rem]'></div>
            <Cryptop05 />
            <div className='mt-[10rem]'></div>
            <Cryptop06 />

            <div className='mt-[10rem]'></div>
            <Cryptop7 />
            <div className='mb-[10rem]'></div>
        </div>
    )
}

export default Home