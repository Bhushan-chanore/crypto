import React from 'react'
import img1 from "../Images/h4lightteammemberimg1jpg@2x.png"
import img5 from "../Images/h4lightteammemberimg2jpg@2x.png"
import img6 from "../Images/h4lightteammemberimg3jpg@2x.png"
import img7 from "../Images/h4lightteammemberimg4jpg@2x.png"
import img8 from "../Images/h4lightteammemberimg5jpg@2x.png"
import img9 from "../Images/h4lightteammemberimg6jpg@2x.png"
import img10 from "../Images/h4lightteammemberimg7jpg@2x.png"
import img11 from "../Images/h4lightteammemberimg8jpg@2x.png"
import img12 from "../Images/h4holdersingleimg2png@2x.png"
import img2 from "../Images/icon-9.svg"
import img3 from "../Images/icon-10.svg"
import img4 from "../Images/icon-11.svg"
import img33 from "../Images/icon-33.svg"
import img34 from "../Images/svg.svg"

import img41 from "../Images/h4iconwithtextimg1png@2x.png"
import img42 from "../Images/h4iconwithtextimg2png@2x.png"
import img43 from "../Images/h4iconwithtextimg3png@2x.png"
import img44 from "../Images/h4iconwithtextimg4png@2x.png"
import img45 from "../Images/h4iconwithtextimg5png@2x.png"
import img46 from "../Images/h4iconwithtextimg6png@2x.png"

import img51 from "../Images/svg-6.svg"
import img52 from "../Images/svg-1.svg"
import img61 from "../Images/icon-35.svg"

function Cryptop06() {

    const card = [
        {
            id: "1",
            img: img1,
            post: "Executive",
            name: "Cheryl Patterson"
        },
        {
            id: "2",
            img: img5,
            post: "Manager",
            name: "Richard Guzman"
        },
        {
            id: "3",
            img: img6,
            post: "Economist",
            name: "Andrea Walker"
        },
        {
            id: "4",
            img: img7,
            post: "Ceo",
            name: "Jonathan Hunt"
        },
        {
            id: "5",
            img: img8,
            post: "Developer",
            name: "Vincent Lucas"
        },
        {
            id: "6",
            img: img9,
            post: "Account",
            name: "Hannah Torres"
        },
        {
            id: "10",
            img: img10,
            post: "Designer",
            name: "Jacob Sandoval"
        },
        {
            id: "11",
            img: img11,
            post: "UI/UX Designer",
            name: "Melissa Ortega"
        },
    ]


    const inputcluster = [
        {
            id: "1",
            heading: "Open source",
            img: img41
        },
        {
            id: "2",
            heading: "High securiity",
            img: img42
        },
        {
            id: "3",
            heading: "Block chains",
            img: img43
        },
        {
            id: "4",
            heading: "Fast services",
            img: img44
        },
        {
            id: "5",
            heading: "Free updates",
            img: img45
        },
        {
            id: "6",
            heading: "Awesome support",
            img: img46
        },
    ]
    return (
        <div>
            <section className="relative  left-[7%] w-[1340px] flex flex-row items-end justify-start sm:gap-[1.188rem] max-w-full text-center text-[3.75rem] text-white font-montserrat ">

                <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.563rem] box-border max-w-[calc(100%_-_40px)]">
                    <div className="w-[1125px] flex flex-col sm:ml-[19rem]  items-start justify-center py-[0rem]  px-[1.25rem] box-border max-w-full">
                        <h1 className="m-0 sm:w-[648px] relative text-inherit tracking-[-2.4px] leading-[4.05rem] font-bold font-inherit flex items-center justify-center shrink-0 z-[2] mq450:text-[2.25rem] mq450:leading-[2.438rem] mq1050:text-[3.5rem] mq1050:leading-[3.25rem]   sm:left-0">
                            Meet the professionals
                        </h1>
                        <p className="text-[1.2rem] sm:w-[648px] flex py-4 flex-row">Praesent hendrerit, mi facilisis eleifend lobortis mi est hendrerit fringillaibus lorem, nonfringilla dui enim et ante eleiz.</p>
                    </div>

                    <div className='mt-4 flex flex-row flex-wrap gap-[1.91rem]'>

                        {
                            card.map((data) => (
                                <Card key={data.id} data={data} />
                            ))
                        }
                    </div>



                </div>

            </section>


            <section className="relative  sm:left-[7%] left-[2px] w-[1340px] flex flex-row items-end justify-start sm:gap-[1.188rem] max-w-full text-center sm:text-[3.75rem] text-[3.6rem] text-white font-montserrat ">

                <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.563rem] box-border max-w-[calc(100%_-_40px)]">
                    {/* part7 */}
                    <div className='mt-[10rem]'></div>
                    <div className=" sm:left-[0%] left-[-7rem] self-stretch flex sm:flex-row flex-col items-start justify-start gap-[9.813rem] max-w-full lg:flex-wrap">
                        <div className="w-[528px] flex flex-row items-end justify-start gap-[1.188rem] min-w-[528px] max-w-full lg:flex-1 mq450:flex-wrap mq750:min-w-full">
                            {/* <div className="h-[436.7px] w-px bg-mediumslateblue-200 flex flex-row items-start justify-start relative z-[3] mq450:w-full mq450:h-px">
                                <div className="h-[5px] w-[5px] absolute !m-[0] bottom-[-25.081rem] left-[calc(50%_-_2.5px)] rounded-8xs bg-white" />
                            </div> */}
                            <div className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[3.438rem] box-border min-w-[330px] min-h-[352px] max-w-full">
                                <div className="self-stretch flex flex-col items-start justify-start gap-[2.038rem] max-w-full">
                                    <h1 className="m-0 w-[476.7px] relative text-inherit tracking-[-2px] leading-[3.188rem] font-bold font-inherit flex items-center max-w-full box-border pr-[1.25rem] z-[4] mq450:text-[1.875rem] mq450:leading-[1.938rem] mq1050:text-[2.5rem] mq1050:leading-[2.563rem]">
                                        The right solutions
                                    </h1>
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[2.356rem] max-w-full text-[1.1rem] text-royalblue-100 ">
                                        <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] max-w-[80%] sm:max-w-full">
                                            <div className="w-[350.8px] flex flex-row items-end justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border max-w-full gap-[1.25rem]">
                                                <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                                                    <div className="relative tracking-[0.26px] leading-[1.5rem] font-medium inline-block min-w-[93.5px]">
                                                        Development
                                                    </div>
                                                </div>
                                                <button className="cursor-pointer [border:none] pt-[0.438rem] pb-[0.563rem] pr-[0.625rem] pl-[0.8rem] bg-royalblue-100 h-8 rounded flex flex-col items-start justify-start box-border gap-[0.563rem]">
                                                    <div className="h-4 relative text-[0.813rem] tracking-[0.26px] leading-[2.063rem] font-medium font-montserrat text-white text-left flex items-center shrink-0 min-w-[28.8px]">
                                                        60%
                                                    </div>
                                                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.625rem] pl-[0.45rem]">
                                                        <div className="h-[5px] w-3 relative box-border border-t-[5px] border-solid border-royalblue-100 border-r-[6px] border-l-[6px]" />
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="self-stretch rounded-10xs bg-white overflow-hidden flex flex-row items-start justify-start z-[4]">
                                                <div className="h-1.5 w-[304.8px] relative bg-royalblue-100 overflow-hidden shrink-0" />
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] max-w-[80%] sm:max-w-full">
                                            <div className="self-stretch flex flex-row items-end justify-between py-[0rem] pr-[0.938rem] pl-[0rem] gap-[1.25rem] mq450:flex-wrap">
                                                <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                                                    <div className="relative tracking-[0.26px] leading-[1.5rem] font-medium inline-block min-w-[91.4px] box-border pr-[0rem]">
                                                        UI/UX Design
                                                    </div>
                                                </div>
                                                <button className="cursor-pointer [border:none] pt-[0.438rem] pb-[0.563rem] pr-[0.688rem] pl-[0.831rem] bg-tomato h-8 rounded flex flex-col items-start justify-start box-border gap-[0.563rem]">
                                                    <div className="h-4 relative text-[0.813rem] tracking-[0.26px] leading-[2.063rem] font-medium font-montserrat text-white text-left flex items-center shrink-0 min-w-[27.7px]">
                                                        92%
                                                    </div>
                                                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.563rem] pl-[0.419rem]">
                                                        <div className="h-[5px] w-3 relative box-border border-t-[5px] border-solid border-tomato border-r-[6px] border-l-[6px]" />
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="self-stretch h-1.5 rounded-10xs bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start py-[0rem] pr-[2.5rem] pl-[0rem] box-border max-w-full z-[4]">
                                                <div className="self-stretch flex-1 relative bg-tomato overflow-hidden max-w-full" />
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] max-w-[80%] sm:max-w-full">
                                            <div className="w-[442.3px] flex flex-row items-end justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[1.25rem] max-w-full mq450:flex-wrap">
                                                <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                                                    <div className="relative tracking-[0.26px] leading-[1.5rem] font-medium inline-block min-w-[92.7px]">
                                                        Compatibility
                                                    </div>
                                                </div>
                                                <button className="cursor-pointer [border:none] pt-[0.438rem] pb-[0.563rem] pr-[0.681rem] pl-[0.825rem] bg-darkblue-200 h-8 rounded flex flex-col items-start justify-start box-border gap-[0.563rem] ">
                                                    <div className="h-4 relative text-[0.813rem] tracking-[0.26px] leading-[2.063rem] font-medium font-montserrat text-white text-left flex items-center shrink-0 min-w-[27.9px]">
                                                        78%
                                                    </div>
                                                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.563rem] pl-[0.425rem]">
                                                        <div className="h-[5px] w-3 relative box-border border-t-[5px] border-solid border-darkblue-200 border-r-[6px] border-l-[6px]" />
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="self-stretch h-1.5 rounded-10xs bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full z-[4]">
                                                <div className="self-stretch w-[396.2px] relative bg-darkblue-200 overflow-hidden shrink-0 max-w-full" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-row items-end justify-start gap-[1.188rem] min-w-[426px] max-w-full mq750:flex-wrap mq750:min-w-full">
                            <img
                                className="h-[365.7px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[413px] z-[4] mq450:min-w-full"
                                loading="lazy"
                                alt=""
                                src={img12}
                            />
                            {/* <div className="h-[436.7px] w-px bg-mediumslateblue-200 flex flex-col items-start justify-start relative z-[3] mq750:w-full mq750:h-px">
                                <div className="w-[5px] h-[5px] absolute !m-[0] top-[-13.856rem] left-[calc(50%_-_2.5px)] rounded-8xs bg-white" />
                            </div> */}
                        </div>
                    </div>
                    {/* part7end */}

                </div>

            </section>


            {/* part8 */}
            <section className="relative  left-[7%] w-[1340px] flex flex-row items-end justify-start sm:gap-[1.188rem] max-w-full text-center text-[3.75rem] text-white font-montserrat ">


                <div className="flex-1 flex flex-col items-start justify-start pt-[6.25rem] pb-[0rem] pr-[1.563rem] pl-[0rem] box-border max-w-[calc(100%_-_40px)]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.694rem] max-w-full">
                        <div className="w-[1264px] flex flex-row items-end justify-between max-w-full gap-[6.25rem] lg:flex-wrap">
                            <div className="w-[635px] flex sm:flex-row flex-col items-start justify-start gap-[1.875rem] min-w-[635px] max-w-full lg:flex-1 mq750:flex-wrap mq750:min-w-full">
                                <div className="relative flex-1 rounded-10xs bg-slateblue flex flex-col items-start justify-start pt-[2rem] pb-[8.875rem] pr-[1.25rem] pl-[2.5rem] box-border gap-[0.313rem] min-w-[227px] min-h-[232px] hover:bg-white hover:text-slateblue">
                                    <div className="relative tracking-[0.26px] leading-[1.5rem] text-[1rem] font-medium">
                                        <span>{`$10,083.035 `}</span>
                                        <span className="text-tomato">-30.94YTD</span>
                                    </div>
                                    <h1 className="m-0 relative text-[1.688rem] tracking-[-1.08px] leading-[1.806rem] font-bold font-inherit inline-block min-w-[93.8px] mq450:text-[1.375rem] mq450:leading-[1.438rem]">
                                        Bitcoin
                                    </h1>
                                    {/* Button */}
                                    <button className="absolute bottom-5 left-5 text-[1rem] py-[0.5rem] px-[1rem] bg-tomato text-white rounded-3xs opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                                        Read More
                                    </button>
                                    {/* Invisible hover area */}
                                    <div className="absolute inset-0 opacity-0 hover:opacity-100"></div>
                                </div>

                                <div className="relative flex-1 rounded-10xs bg-slateblue flex flex-col items-start justify-start pt-[2rem] pb-[8.875rem] pr-[1.25rem] pl-[2.5rem] box-border gap-[0.313rem] min-w-[227px] min-h-[232px] hover:bg-white hover:text-slateblue">
                                    <div className="relative tracking-[0.26px] leading-[1.5rem] text-[1rem] font-medium">
                                        <span>{`$10,083.035 `}</span>
                                        <span className="text-tomato">-30.94YTD</span>
                                    </div>
                                    <h1 className="m-0 relative text-[1.688rem] tracking-[-1.08px] leading-[1.806rem] font-bold font-inherit inline-block min-w-[93.8px] mq450:text-[1.375rem] mq450:leading-[1.438rem]">
                                        Etherum
                                    </h1>
                                    {/* Button */}
                                    <button className="absolute bottom-5 left-5 text-[1rem] py-[0.5rem] px-[1rem] bg-tomato text-white rounded-3xs opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                                        Read More
                                    </button>
                                    {/* Invisible hover area */}
                                    <div className="absolute inset-0 opacity-0 hover:opacity-100"></div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.744rem] box-border min-w-[516.3999999999978px] max-w-full text-[3.125rem] text-white lg:flex-1 mq750:min-w-full ">
                                <div className="flex flex-col items-start justify-start gap-[1.344rem] max-w-full">
                                    <h1 className="m-0 relative text-inherit tracking-[-2px] leading-[3.188rem] font-bold font-inherit inline-block max-w-full z-[6] mq450:text-[1.875rem] mq450:leading-[1.938rem] mq1050:text-[2.5rem] mq1050:leading-[2.563rem]">
                                        Our crypto pricing
                                    </h1>
                                    <div className="flex flex-row items-start justify-start gap-[1.15rem] text-[0.938rem] text-lightsteelblue">
                                        <img
                                            className="h-6 w-[17px] relative overflow-hidden shrink-0"
                                            alt=""
                                            src={img33}
                                        />
                                        <div className="relative leading-[1.5rem] font-medium z-[6]">
                                            <p className="m-0">
                                                Vel illum dolore eu feugiat nulla facilisis at vero eros
                                                et accu qui
                                            </p>
                                            <p className="m-0">
                                                blandit praesent luptatum zzril delenit augue duis.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[1233.8px] flex flex-row items-start justify-between pt-[0rem] px-[0rem] pb-[1.175rem] box-border max-w-full gap-[6.25rem] lg:flex-wrap">
                            <div className="w-[635px] flex flex-col items-start justify-start pt-[1.181rem] px-[0rem] pb-[0rem] box-border min-w-[635px] max-w-full lg:flex-1 mq750:min-w-full">
                                <div className="self-stretch flex sm:flex-row flex-col items-start justify-start gap-[1.875rem] mq750:flex-wrap">
                                <div className="relative flex-1 rounded-10xs bg-slateblue flex flex-col items-start justify-start pt-[2rem] pb-[8.875rem] pr-[1.25rem] pl-[2.5rem] box-border gap-[0.313rem] min-w-[227px] min-h-[232px] hover:bg-white hover:text-slateblue">
                                    <div className="relative tracking-[0.26px] leading-[1.5rem] text-[1rem] font-medium">
                                        <span>{`$10,083.035 `}</span>
                                        <span className="text-tomato">-30.94YTD</span>
                                    </div>
                                    <h1 className="m-0 relative text-[1.688rem] tracking-[-1.08px] leading-[1.806rem] font-bold font-inherit inline-block min-w-[93.8px] mq450:text-[1.375rem] mq450:leading-[1.438rem]">
                                        Ripple
                                    </h1>
                                    {/* Button */}
                                    <button className="absolute bottom-5 left-5 text-[1rem] py-[0.5rem] px-[1rem] bg-tomato text-white rounded-3xs opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                                        Read More
                                    </button>
                                    {/* Invisible hover area */}
                                    <div className="absolute inset-0 opacity-0 hover:opacity-100"></div>
                                </div>
                                <div className="relative flex-1 rounded-10xs bg-slateblue flex flex-col items-start justify-start pt-[2rem] pb-[8.875rem] pr-[1.25rem] pl-[2.5rem] box-border gap-[0.313rem] min-w-[227px] min-h-[232px] hover:bg-white hover:text-slateblue">
                                    <div className="relative tracking-[0.26px] leading-[1.5rem] text-[1rem] font-medium">
                                        <span>{`$10,083.035 `}</span>
                                        <span className="text-tomato">-30.94YTD</span>
                                    </div>
                                    <h1 className="m-0 relative text-[1.688rem] tracking-[-1.08px] leading-[1.806rem] font-bold font-inherit inline-block min-w-[93.8px] mq450:text-[1.375rem] mq450:leading-[1.438rem]">
                                        Dash
                                    </h1>
                                    {/* Button */}
                                    <button className="absolute bottom-5 left-5 text-[1rem] py-[0.5rem] px-[1rem] bg-tomato text-white rounded-3xs  opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-50">
                                        Read More
                                    </button>
                                    {/* Invisible hover area */}
                                    {/* <div className="absolute inset-0 opacity-0 hover:opacity-100"></div> */}
                                </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[2.719rem] min-w-[486.1999999999971px] max-w-full text-[0.938rem] text-lightsteelblue lg:flex-1 mq750:min-w-full">
                                <div className="flex flex-row items-start justify-start gap-[1.15rem]">
                                    <img
                                        className="h-6 w-[17px] relative overflow-hidden shrink-0 [debug_commit:f6aba90]"
                                        alt=""
                                        src={img33}
                                    />
                                    <div className="relative leading-[1.5rem] font-medium shrink-0 [debug_commit:f6aba90] z-[6]">
                                        <p className="m-0">
                                            Autem vel eum iriure dolor in hendrerit in vulputate velit
                                            es
                                        </p>
                                        <p className="m-0">
                                            dolore eu feugiat nulla facilisis at vero eros et.
                                        </p>
                                    </div>
                                </div>
                                <button className="cursor-pointer [border:none] py-[1.375rem] pr-[2.194rem] pl-[2.5rem] bg-tomato rounded-3xs overflow-hidden flex flex-row items-end justify-start gap-[0.6rem] z-[6]">
                                    <div className="relative text-[0.875rem] tracking-[0.42px] leading-[0.875rem] font-semibold font-montserrat text-white text-left inline-block min-w-[81.7px]">
                                        Read More
                                    </div>
                                    <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                                        <img
                                            className="w-[26px] h-[9px] relative overflow-hidden shrink-0"
                                            alt=""
                                            src={img34}
                                        />
                                    </div>
                                </button>
                            </div>
                        </div>


                        <div className="self-stretch flex mt-[10rem] flex-row flex-wrap items-end justify-start gap-[5rem] max-w-full text-[1.688rem] text-white">
                            {/* <div className="w-[388.7px] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[3.125rem] box-border min-h-[512px] max-w-full">
                                <div className="self-stretch flex flex-col items-start justify-start gap-[3.438rem]"> */}
                            {
                                inputcluster.map((item) => (
                                    <InputCluster key={item.id} item={item} />
                                ))
                            }
                            {/* </div>
                            </div> */}

                        </div>


                    </div>
                </div>
            </section>
            {/* part8 end */}

            {/* part9  */}

            <section className="relative sm:left-[6%] left-[4%] w-[1340px] flex flex-row items-end justify-start sm:gap-[1.188rem] max-w-full text-center text-[3.75rem] text-white font-montserrat box-border bg-[url('https://innovio.qodeinteractive.com/wp-content/uploads/2018/10/h4-backround-img-1.png')] bg-cover bg-no-repeat bg-[top] ">

                <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.563rem] box-border max-w-[calc(100%_-_40px)]">

                    <div className="w-[495.4px] flex flex-row items-start justify-start gap-[1.188rem] max-w-full">
                        {/* <div className="h-[827.6px] w-px bg-mediumslateblue-200 flex flex-row items-start justify-start relative">
                            <div className="h-[5px] w-[5px] absolute !m-[0] bottom-[-2.019rem] left-[calc(50%_-_2.5px)] rounded-8xs bg-white" />
                        </div> */}
                        <div className="h-[827.6px] flex-1 relative max-w-[calc(100%_-_20px)]">
                            {/* <div className="absolute top-[0rem] left-[26.769rem] bg-mediumslateblue-200 h-[827.6px] flex flex-row items-end justify-start pt-[12.313rem] px-[0rem] pb-[12.3rem] box-border">
                                <div className="ml-[-0.125rem] h-[5px] w-[5px] relative rounded-8xs bg-white shrink-0 [debug_commit:f6aba90]" />
                            </div> */}
                            <h1 className="m-0 absolute top-[16.194rem] left-[-2.5rem] text-inherit tracking-[-2.4px] leading-[4.05rem] font-bold font-inherit flex items-center w-[475.4px] h-[129.6px] z-[1] mq450:text-[2.25rem] mq450:leading-[2.438rem] mq1050:text-[3rem] mq1050:leading-[3.25rem]">
                                <span className="w-full">
                                    <p className="m-0">Mining platform</p>
                                    <p className="m-0">of the future!</p>
                                </span>
                            </h1>
                            <button className="cursor-pointer [border:none] py-[1.375rem] pr-[2.181rem] pl-[2.5rem] bg-tomato absolute top-[26.225rem] left-[0rem] rounded-3xs overflow-hidden flex flex-row items-end justify-start gap-[0.606rem]">
                                <div className="relative text-[0.875rem] tracking-[0.42px] leading-[0.875rem] font-semibold font-montserrat text-white text-left inline-block min-w-[87.5px]">
                                    Buy Tokens
                                </div>
                                <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                                    <img
                                        className="w-[26px] h-[9px] relative overflow-hidden shrink-0"
                                        alt=""
                                        src={img51}
                                    />
                                </div>
                            </button>
                            <button className="cursor-pointer [border:none] py-[1.375rem] pr-[2.188rem] pl-[2.5rem] bg-white absolute top-[26.225rem] left-[13.638rem] rounded-3xs overflow-hidden flex flex-row items-end justify-start gap-[0.606rem]">
                                <div className="relative text-[0.875rem] tracking-[0.42px] leading-[0.875rem] font-semibold font-montserrat text-midnightblue text-left inline-block min-w-[91.9px]">
                                    Sign In Now
                                </div>
                                <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                                    <img
                                        className="w-[26px] h-[9px] relative overflow-hidden shrink-0"
                                        alt=""
                                        src={img52}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                    {/* <img
          className="absolute  w-[49px] h-[49px] z-[11]"
          alt=""
          src={img53}
        /> */}


                </div>

            </section>



        </div>
    )
}


const Card = ({ data }) => {
    return (
        <div className='mb-[2rem]'>
            <div className="h-[431.5px] sm:w-[302px] w-[370px] flex flex-col items-start justify-start gap-[1.513rem] text-left text-[0.813rem] text-royalblue-100 font-montserrat">
                <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src={data.img}
                />
                <div
                    className="flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] gap-[2.1rem]"

                >
                    <div className="flex flex-col items-start justify-start gap-[0.363rem]">
                        <div
                            className="relative text-[1.1rem] tracking-[0.26px] leading-[0.975rem] capitalize font-medium inline-block min-w-[66.4px]"

                        >
                            {data.post}
                        </div>
                        <h1 className="m-0 relative text-[1.688rem] tracking-[-1.08px] leading-[1.806rem] font-bold font-inherit text-white mq450:text-[1.375rem] mq450:leading-[1.438rem]">
                            {data.name}
                        </h1>
                    </div>
                    <div
                        className="w-[179.3px] flex flex-row items-start justify-start py-[0rem] px-[1rem] box-border"

                    >
                        <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem]">
                            <div className="h-[20.9px] w-[19px] relative">
                                <div className="absolute top-[-0.937rem] left-[-0.937rem] rounded-5xl-5 box-border w-[49px] h-[49px] border-[2px] border-solid border-mediumslateblue-100" />
                                <img
                                    className="absolute left-[0rem] w-full h-full overflow-hidden z-[1]"
                                    alt=""
                                    src={img2}
                                />
                            </div>
                            <div className="h-[20.9px] w-[19px] relative">
                                <div className="absolute top-[-0.937rem] left-[-0.937rem] rounded-5xl-5 box-border w-[49px] h-[49px] border-[2px] border-solid border-mediumslateblue-100" />
                                <img
                                    className="absolute  left-[0rem] w-full h-full overflow-hidden z-[1]"
                                    alt=""
                                    src={img3}
                                />
                            </div>
                            <div className="h-[20.9px] w-[19px] relative">
                                <div className="absolute top-[-0.937rem] left-[-0.937rem] rounded-5xl-5 box-border w-[49px] h-[49px] border-[2px] border-solid border-mediumslateblue-100" />
                                <img
                                    className="absolute  left-[0rem] w-full h-full overflow-hidden z-[1]"
                                    alt=""
                                    src={img4}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function InputCluster({ item }) {

    return (
        <div className="self-stretch flex flex-row items-start justify-start gap-[2rem] text-left text-[1.688rem] text-white font-montserrat mq450:flex-wrap">
            <img
                className="h-[78px] w-[70px] relative overflow-hidden shrink-0 object-cover hover:transform hover:translate-y-[-10px] transition-transform duration-250 ease-in-out"
                loading="lazy"
                alt=""
                src={item.img}
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[1.206rem] px-[0rem] pb-[0rem] box-border min-w-[187px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.594rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.513rem]">
                        <h1 className="m-0 relative text-inherit tracking-[-1.08px] leading-[2.025rem] font-bold font-inherit shrink-0 [debug_commit:f6aba90] mq450:text-[1.375rem] mq450:leading-[1.625rem]">
                            {item.heading}
                        </h1>
                        <div className="relative text-[1rem]  leading-[1.5rem] font-medium text-lightsteelblue shrink-0 [debug_commit:f6aba90]">
                            <p className="m-0">Lorem proin gravida nibh vel velit aua</p>
                            <p className="m-0">liquean sollicitudin lorem quis bibe</p>
                            <p className="m-0">auctor, nisi elit.</p>
                        </div>
                    </div>
                    <div
                        className="rounded-3xs flex flex-row items-start justify-start gap-[0.875rem] text-[0.875rem]"
                    >
                        <div className="flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem]">
                            <div className="relative tracking-[0.42px] text-[1rem] leading-[0.875rem] font-semibold inline-block min-w-[81.7px]">
                                Read More
                            </div>
                        </div>
                        <div className="h-[46px] w-[46px] relative rounded-27xl box-border border-[2px] border-solid border-mediumslateblue-100">
                            <div className="absolute top-[calc(50%_-_7.5px)] left-[calc(50%_-_0.5px)] bg-white w-px h-[15px]" />
                            <div className="absolute top-[calc(50%_-_0.5px)] left-[calc(50%_-_7.5px)] bg-white w-[15px] h-px z-[1]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}





export default Cryptop06


