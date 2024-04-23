import { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Import the desired effect CSS

import img2 from "../Images/img2.png"
import robot from "../Images/robot.png"
import floor from "../Images/floor.png"
import floor2 from "../Images/floor2.png"
import img3 from "../Images/img3.png"
import img4 from "../Images/img4.png"
import wire1 from "../Images/wire1.png"
import wire2 from "../Images/wire2.png"
import wire3 from "../Images/wire3.png"
import bitcoin from "../Images/bitcoin.png"
import robo1 from "../Images/robo1.png"
import robo2 from "../Images/robo2.png"
import robo3 from "../Images/robo3.png"
import robo4 from "../Images/robo4.png"
import robo5 from "../Images/robo5.png"
import bit from "../Images/bit.png"
function Hero() {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 3000); // 3000 milliseconds = 3 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>

            <div style={{ width: "400px", height: "400px", display: "flex", flexWrap: "wrap" }}>

                <div className="h-[500px] w-[650px] sm:h-[700px] sm:w-[850px] absolute !m-[0] right-[0.125rem] sm:bottom-[1.125rem] bottom-[-10rem] overflow-hidden" >
                    {/* <img
                        className="absolute top-[51.938rem] left-[2.938rem] w-[39px] h-[59px] overflow-hidden object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="../Images/rslayerwrap--rsl--yer--h8revimg4png@2x.png"
                    /> */}
                    {isLoaded && (
                <LazyLoadImage
                    className="absolute top-[0.188rem] left-[11.438rem] w-[98px] h-[117px] overflow-hidden object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src={img2}
                />
            )}
                    <img
                        className="absolute top-[3.25rem] left-[6.063rem] w-[98px] h-[117px] overflow-hidden object-cover z-[3]"
                        alt=""
                        src={img2}
                    />
                    <img
                        className="absolute top-[0rem] left-[35.25rem] w-[98px] h-[117px] overflow-hidden object-cover z-[2]"
                        alt=""
                        src={img2}
                    />
                    <img
                        className="absolute top-[3.188rem] left-[40.5rem] w-[98px] h-[117px] overflow-hidden object-cover z-[3]"
                        alt=""
                        src={img2}
                    />
                    <img
                        className="bit absolute top-[2.7rem] left-[19.375rem] w-[202px] h-[219px] overflow-hidden object-cover z-[8]"
                        alt=""
                        src={bit}
                    />
                    <img
                        className="absolute top-[30.688rem] left-[46.438rem] w-[138px] h-[380px] overflow-hidden object-cover z-[9]"
                        loading="lazy"
                        alt=""
                        src={robot}
                    />
                    <div className="absolute top-[4.563rem] left-[0rem] w-[841px] h-[642px]">
                        <img
                            className="absolute top-[0rem] left-[0rem] w-full h-full overflow-hidden object-cover"
                            alt=""
                            src={floor}
                        />
                        <img
                            className="absolute top-[1.813rem] left-[0.75rem] w-[98px] h-[117px] overflow-hidden object-cover z-[4]"
                            alt=""
                            src={img3}
                        />
                        <img
                            className="absolute top-[0.125rem] left-[5.375rem] w-[285px] h-[242px] overflow-hidden object-cover z-[5]"
                            alt=""
                            src={wire1}
                        />
                        <img
                            className="absolute top-[1.688rem] left-[45.938rem] w-[98px] h-[117px] overflow-hidden object-cover z-[4]"
                            alt=""
                            src={img3}
                        />
                        <img
                            className="absolute top-[0.125rem] left-[29.625rem] w-[285px] h-[242px] overflow-hidden object-cover z-[5]"
                            alt=""
                            src={wire2}
                        />
                        <div className="absolute top-[6.313rem] left-[9.938rem] w-[527px] h-[339px]">
                            <img
                                className="absolute top-[0rem] left-[0rem] w-full h-full overflow-hidden object-cover"
                                alt=""
                                src={floor2}
                            />
                            <img
                                className="absolute top-[2.875rem] left-[8.688rem] w-[250px] h-[141px] overflow-hidden object-cover z-[7]"
                                alt=""
                                src={bitcoin}
                            />
                        </div>
                        <img
                            className="absolute top-[18.75rem] left-[5.438rem] w-[285px] h-[242px] overflow-hidden object-cover z-[7]"
                            alt=""
                            src={wire3}
                        />
                        <img
                            className="absolute top-[24.563rem] left-[0.563rem] w-[98px] h-[117px] overflow-hidden object-cover z-[8]"
                            alt=""
                            src={img4}
                        />
                        <img
                            className="absolute top-[27.688rem] left-[6rem] w-[98px] h-[117px] overflow-hidden object-cover z-[9]"
                            alt=""
                            src={img4}
                        />
                        <img
                            className="absolute top-[31rem] left-[11.313rem] w-[98px] h-[117px] overflow-hidden object-cover z-[10]"
                            alt=""
                            src={img4}
                        />
                        <img
                            className="absolute top-[27.113rem] left-[32.7rem] w-[138px] h-[166px] overflow-hidden object-cover z-[7]"
                            loading="lazy"
                            alt=""
                            src={robo1}
                        />
                        <img
                            className="roboleft absolute top-[21.2rem] left-[42.488rem] w-[138px] h-[166px] overflow-hidden object-cover z-[7]"
                            alt=""
                            src={robo2}
                        />
                        <img
                            className="absolute top-[29.5rem] left-[43.25rem] w-[120px] h-[78px] overflow-hidden object-cover z-[8]"
                            alt=""
                            src={robo3}
                        />
                        <img
                            className="absolute top-[33.413rem] left-[29.088rem] w-[65px] h-[78px] overflow-hidden object-cover z-[8]"
                            alt=""
                            src={robo4}
                        />
                    </div>
                    <img
                        className="absolute top-[25.15rem] left-[50.663rem] w-[65px] h-[78px] overflow-hidden object-cover z-[8]"
                        loading="lazy"
                        alt=""
                        src={robo5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero