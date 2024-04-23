import React, { useState, useEffect } from 'react';
import img1 from "../Images/icon-35.svg"
import img2 from "../Images/svg-9.svg"

function Cryptop7() {
    // Set the end time of the sale (replace with your desired end time)
    const saleEndTime = new Date('2024-04-25T00:00:00');

    // State to store the remaining time
    const [remainingTime, setRemainingTime] = useState(getTimeRemaining());

    // useEffect hook to update the remaining time every second
    useEffect(() => {
        // Function to update the remaining time
        function updateRemainingTime() {
            setRemainingTime(getTimeRemaining());
        }

        // Update the remaining time every second
        const intervalId = setInterval(updateRemainingTime, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures this effect runs only once

    // Function to calculate the remaining time until the sale end
    function getTimeRemaining() {
        const currentTime = new Date();
        const totalSeconds = Math.floor((saleEndTime - currentTime) / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(totalSeconds % 60);
        return { days, hours, minutes, seconds };
    }

    const purchase = [
        {
            id: "1",
            name: "Personal",
            price: "12"
        },
        {
            id: "2",
            name: "Business",
            price: "32"
        },
        {
            id: "3",
            name: "Enterprise",
            price: "51"
        },
    ]

    return (
        <>
            <section className="relative  left-[7%] w-[1340px] flex flex-row items-end justify-start sm:gap-[1.188rem] max-w-full text-center text-[3.75rem] text-white font-montserrat ">



                <div className="digital-clock flex flex-row flex-wrap gap-[3rem]">
                    <h2 className='flex flex-row flex-wrap w-[20rem] text-[2.5rem]'>Sale for Limited Time :</h2>
                    <div className="time flex flex-row flex-wrap  sm:gap-[2rem] gap-6 mt-[-8rem]">

                        <div className="sm:h-[375px] h-[200px] sm:w-[209.9px] w-[170px] relative text-left text-[0.813rem] text-slategray font-montserrat">

                            <div className="absolute top-[6.25rem] left-[0rem] rounded-10xs bg-white w-full flex flex-col items-start justify-start pt-[1.5rem] pb-[2.625rem] pr-[1.25rem] pl-[1.875rem] box-border gap-[0.313rem] z-[9]">
                                <div className="w-[209.9px] h-[155px] relative rounded-10xs bg-white hidden" />
                                <div
                                    className="relative tracking-[0.26px] leading-[1.5rem] capitalize font-medium inline-block min-w-[33.4px] z-[10]" >
                                    days
                                </div>
                                <b
                                    className="relative text-[3.75rem] tracking-[-2.4px] leading-[3.75rem] inline-block text-midnightblue min-w-[79.1px] z-[10] mq450:text-[2.25rem] mq450:leading-[2.25rem] mq1050:text-[3rem] mq1050:leading-[3rem]"    >
                                    {remainingTime.days}
                                </b>
                            </div>
                        </div>

                        <div className="sm:h-[375px] h-[200px] sm:w-[209.9px] w-[170px] relative text-left text-[0.813rem] text-slategray font-montserrat">

                            <div className="absolute top-[6.25rem] left-[0rem] rounded-10xs bg-white w-full flex flex-col items-start justify-start pt-[1.5rem] pb-[2.625rem] pr-[1.25rem] pl-[1.875rem] box-border gap-[0.313rem] z-[9]">
                                <div className="w-[209.9px] h-[155px] relative rounded-10xs bg-white hidden" />
                                <div
                                    className="relative tracking-[0.26px] leading-[1.5rem] capitalize font-medium inline-block min-w-[33.4px] z-[10]" >
                                    hours
                                </div>
                                <b
                                    className="relative text-[3.75rem] tracking-[-2.4px] leading-[3.75rem] inline-block text-midnightblue min-w-[79.1px] z-[10] mq450:text-[2.25rem] mq450:leading-[2.25rem] mq1050:text-[3rem] mq1050:leading-[3rem]"    >
                                    {remainingTime.hours}
                                </b>
                            </div>
                        </div>

                        <div className="sm:h-[375px] h-[200px] sm:w-[209.9px] w-[170px] relative text-left text-[0.813rem] text-slategray font-montserrat">

                            <div className="absolute top-[6.25rem] left-[0rem] rounded-10xs bg-white w-full flex flex-col items-start justify-start pt-[1.5rem] pb-[2.625rem] pr-[1.25rem] pl-[1.875rem] box-border gap-[0.313rem] z-[9]">
                                <div className="w-[209.9px] h-[155px] relative rounded-10xs bg-white hidden" />
                                <div
                                    className="relative tracking-[0.26px] leading-[1.5rem] capitalize font-medium inline-block min-w-[33.4px] z-[10]" >
                                    minutes
                                </div>
                                <b
                                    className="relative text-[3.75rem] tracking-[-2.4px] leading-[3.75rem] inline-block text-midnightblue min-w-[79.1px] z-[10] mq450:text-[2.25rem] mq450:leading-[2.25rem] mq1050:text-[3rem] mq1050:leading-[3rem]"    >
                                    {remainingTime.minutes}
                                </b>
                            </div>
                        </div>

                        <div className="sm:h-[375px] h-[200px] sm:w-[209.9px] w-[170px] relative text-left text-[0.813rem] text-slategray font-montserrat">

                            <div className="absolute top-[6.25rem] left-[0rem] rounded-10xs bg-white w-full flex flex-col items-start justify-start pt-[1.5rem] pb-[2.625rem] pr-[1.25rem] pl-[1.875rem] box-border gap-[0.313rem] z-[9]">
                                <div className="w-[209.9px] h-[155px] relative rounded-10xs bg-white hidden" />
                                <div
                                    className="relative tracking-[0.26px] leading-[1.5rem] capitalize font-medium inline-block min-w-[33.4px] z-[10]" >
                                    seconds
                                </div>
                                <b
                                    className="relative text-[3.75rem] tracking-[-2.4px] leading-[3.75rem] inline-block text-midnightblue min-w-[79.1px] z-[10] mq450:text-[2.25rem] mq450:leading-[2.25rem] mq1050:text-[3rem] mq1050:leading-[3rem]"    >
                                    {remainingTime.seconds}
                                </b>
                            </div>
                        </div>

                        {/* {remainingTime.days} days, {remainingTime.hours} hours, {remainingTime.minutes} minutes, {remainingTime.seconds} seconds */}
                    </div>


                </div>





                {/* </div> */}

            </section>


<div className='sm:mt-0 mt-[10rem]'></div>

            <section className="relative  left-[7%] w-[1340px] flex flex-row flex-wrap items-end justify-start  gap-[6.188rem] max-w-full text-center text-[3.75rem] text-white font-montserrat ">


                {
                    purchase.map((currele) => (
                        <Purchase key={currele.id} currele={currele} />
                    ))
                }


            </section>
        </>
    );
}

function Purchase({ currele }) {
    return (
        <>

            <div className="self-stretch flex flex-col items-end justify-start gap-[3.125rem]">
                <div className="self-stretch flex flex-col items-end justify-start gap-[1.125rem]">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[1.675rem] mq450:flex-wrap">
                        <div className="w-[84.2px] flex flex-col items-start justify-start gap-[0.5rem]">
                            <div className="flex flex-row items-start justify-start gap-[0.225rem]">
                                <div className="relative leading-[3.75rem] font-semibold inline-block min-w-[58.2px] mq450:text-[2.25rem] mq450:leading-[2.25rem] mq1050:text-[3rem] mq1050:leading-[3rem]">
                                    {currele.price}
                                </div>
                                <h1 className="m-0 relative text-[2.188rem] leading-[2.188rem] font-semibold font-inherit inline-block min-w-[22.4px] mq450:text-[1.313rem] mq450:leading-[1.313rem] mq1050:text-[1.75rem] mq1050:leading-[1.75rem]">
                                    $
                                </h1>
                            </div>
                            <div className="self-stretch relative text-[0.813rem] tracking-[0.26px] leading-[1.25rem] capitalize font-medium text-lightsteelblue pr-[1.688rem]">
                                monthly
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start pt-[0.188rem] px-[0rem] pb-[0rem] box-border min-w-[187px] text-[1.688rem]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[0.875rem]">
                                <h1 className="m-0 w-[146.6px] relative text-inherit leading-[1.813rem] font-bold font-inherit flex items-center box-border pr-[1.25rem] mq450:text-[1.375rem] mq450:leading-[1.438rem]">
                                    {currele.name}
                                </h1>
                                <h3 className="m-0 relative text-[1.125rem] leading-[1.5rem] font-medium font-inherit text-lightsteelblue">
                                    <p className="m-0">Design solutions for any media.</p>
                                    <p className="m-0">It’s a piece of cake.</p>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="w-[307.3px] flex flex-col items-start justify-start py-[0rem] pr-[0rem] pl-[1.25rem] box-border text-[0.938rem] text-lightsteelblue">
                        <div className="self-stretch flex flex-row items-end justify-start pt-[0.469rem] px-[0rem] pb-[0.344rem] gap-[0.938rem]">
                            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.156rem]">
                                <img
                                    className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
                                    alt=""
                                    src={img1}
                                />
                            </div>
                            <div className="relative leading-[1.5rem] font-medium inline-block min-w-[107.4px]">{`Web & mobile`}</div>
                        </div>
                        <div className="self-stretch flex flex-row items-end justify-start pt-[0.469rem] px-[0rem] pb-[0.344rem] gap-[0.938rem]">
                            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.156rem]">
                                <img
                                    className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
                                    alt=""
                                    src={img1}
                                />
                            </div>
                            <div className="relative leading-[1.5rem] font-medium">
                                Free custom server
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-end justify-start pt-[0.469rem] px-[0rem] pb-[0.344rem] gap-[0.938rem]">
                            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.156rem]">
                                <img
                                    className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
                                    alt=""
                                    src={img1}
                                />
                            </div>
                            <div className="relative leading-[1.5rem] font-medium">
                                Best hosting market
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-end justify-start pt-[0.469rem] px-[0rem] pb-[0.344rem] gap-[0.938rem]">
                            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.156rem]">
                                <img
                                    className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
                                    alt=""
                                    src={img1}
                                />
                            </div>
                            <div className="relative leading-[1.5rem] font-medium">
                                Outstanding support
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.625rem]">
                    <button className="cursor-pointer [border:none] py-[1.375rem] pr-[2.194rem] pl-[2.5rem] bg-blueviolet rounded-3xs overflow-hidden flex flex-row items-end justify-start gap-[0.6rem]">
                        <div className="relative text-[0.875rem] tracking-[0.42px] leading-[0.875rem] font-semibold font-montserrat text-white text-left inline-block min-w-[71.2px]">
                            Purchase
                        </div>
                        <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                            <img
                                className="w-[26px] h-[9px] relative overflow-hidden shrink-0"
                                alt=""
                                src={img2}
                            />
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Cryptop7