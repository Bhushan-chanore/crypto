import React from 'react'
import img2 from "../Images/h4holdertabimg1png@2x.png"
import img3 from "../Images/svg.svg"
function Technology() {
  return (
    <div>
        <div className="self-stretch flex flex-col sm:flex-row items-start justify-center gap-[6.094rem] max-w-full text-left text-[0.938rem] text-lightsteelblue mq1050:flex-wrap">
              <img
                className="h-[411.3px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[422px] z-[2] mq750:min-w-full"
                loading="lazy"
                alt=""
                src={img2}
              />
              <div className="flex flex-col items-start justify-start pt-[3.444rem] px-[0rem] pb-[0rem] box-border min-w-[466.2999999999993px] max-w-full mq750:min-w-full mq1050:flex-1">
                <div className="flex flex-col items-start justify-start gap-[2.063rem]">
                  <div className="flex flex-col items-start justify-start gap-[1.594rem]">
                    <div className="relative leading-[1.5rem] font-medium z-[2]">
                      <p className="m-0">
                        Vel illum dolore eu feugiat nulla facilisis at vero eros
                        et accu
                      </p>
                      <p className="m-0">
                        praesent luptatum zzril delenit augue duis. Autem vel eum
                        iri
                      </p>
                      <p className="m-0">
                        dolor in hendrerit in vulputate velit esse dolore eu feugi
                      </p>
                      <p className="m-0">facilisis at vero eros et accumsan.</p>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.175rem]">
                      <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                        <input
                          className="m-0 w-[17px] h-6 relative overflow-hidden shrink-0"
                          type="checkbox"
                        />
                        <input
                          className="m-0 w-[17px] h-6 relative overflow-hidden shrink-0"
                          type="checkbox"
                        />
                        <input
                          className="m-0 w-[17px] h-6 relative overflow-hidden shrink-0"
                          type="checkbox"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                        <div className="relative leading-[1.5rem] font-medium z-[2]">
                          Crypto-news curation
                        </div>
                        <div className="relative leading-[1.5rem] font-medium z-[2]">
                          Natural Language Understanding
                        </div>
                        <div className="relative leading-[1.5rem] font-medium z-[2]">
                          Wallet aggregation
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] py-[1.375rem] pr-[2.188rem] pl-[2.5rem] bg-tomato rounded-3xs overflow-hidden flex flex-row items-end justify-start gap-[0.606rem] z-[2]">
                    <div className="relative text-[0.875rem] tracking-[0.42px] leading-[0.875rem] font-semibold font-montserrat text-white text-left inline-block min-w-[81.7px]">
                      Read More
                    </div>
                    <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                      <img
                        className="w-[26px] h-[9px] relative overflow-hidden shrink-0"
                        alt=""
                        src={img3}
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Technology