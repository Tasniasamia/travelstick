"use client";
import { Progress, Tooltip } from "antd";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const About = () => {
  const services = [
    "Accurate Testing Processes",
    "Complete Satisfaction Guarantee",
    "300+ Successful Projects done",
    "Professional Engineers Provide",
  ];
  const [percent, setPercent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef();
  useEffect(() => {
    if (isAnimating) {
      animationRef.current = setInterval(() => {
        setPercent((prevPercent) => {
          if (prevPercent >= 70) {
            setIsAnimating(false);
            return 70;
          }
          return prevPercent + 1;
        });
      }, 20);
    } else if (animationRef.current) {
      clearInterval(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, [isAnimating]);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container mb-[120px] flex  md:gap-[55px] gap-[30px] md:flex-row flex-col-reverse md:items-start items-center 2xl:px-0 px-4 ">
      <div className="flex items-center xl:w-[530px] md:w-1/2 mx-auto relative">
        <div className="rounded-[10px] xl:w-auto sm:w-[300px] w-[240px] bg-primary p-4 absolute z-20 flex sm:gap-[30px] gap-[20px] items-center bottom-[-71px] left-1/2 -translate-x-1/2 ">
          <div className="bg-[#F3FBF2] rounded-[10px] sm:w-[119px] sm:h-[110px] h-[80px] w-[80px] grid place-content-center ">
            <Image
              src="/svg.png"
              width={80}
              height={80}
              className="sm:h-[80px] sm:w-[80px] h-[60px] w-[60px] object-fill"
              alt="aboutvector"
            />
          </div>
          <div>
            <h3 className="text-[36px] font-bold leading-[44px] text-white mb-[6px] font-dm-sans">
              25+
            </h3>
            <h5 className="text-base font-normal font-roboto text-white w-[107px] ">
              Years Working Experience
            </h5>
          </div>
        </div>
        <Image
          src="/about.png"
          className="lg:w-[500px] sm:w-[424px] w-full   lg:h-[554px] h-[400px] object-cover rounded-[10px]"
          width={500}
          height={554}
          alt="about image"
        />

        <Image
          src="/vector.png"
          height={518}
          width={30}
          className="sm:w-[30px] sm:block hidden  lg:h-[518px] h-[380px] object-cover"
        />
      </div>
      <div className="xl:w-[735px] md:w-1/2 ">
        <div>
          <div className="flex gap-2 items-center lg:mb-[24px] mb-[12px]">
            <Image
              src="/frame.png"
              width={24}
              height={24}
              className="h-[24px] w-[24px] object-cover"
              alt="frame"
            />
            <h6 className="section-name">About Us</h6>
          </div>
          <h2 className="section-title text-text_primary lg:pb-[24px] pb-[12px] xl:w-[calc(100%-100px)] w-full">
            Leading the Solar Movement
          </h2>
          <p className="section-description text-text_secondary lg:mb-[40px] mb-[20px] line-clamp-4 xl:w-[725px] w-full">
            Whether you’re a homeowner, business, or nonprofit, electricity
            costs can make up a large portion of your monthly expenses. Even if
            you don’t produce 100% of the energy you consume, solar will reduce
            your utility bills, saving you a lot of money. With the cost of
            solar becoming more affordable it is now more affordable than ever.
          </p>
          <div className="flex sm:flex-row flex-col xl:gap-[120px] sm:gap-[40px] gap-[20px] lg:mb-[30px] mb-[12px]">
            <div className="flex flex-col gap-[20px] text-text_primary">
              {services.slice(0, 2)?.map((i, index) => {
                return (
                  <div
                    key={index}
                    className="text-base font-roboto  font-medium flex gap-[12px] items-center"
                  >
                    <IoMdCheckmarkCircleOutline className="text-primaryHover text-[24px]" />
                    {i}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-[20px]">
              {services.slice(2, 4)?.map((i, index) => {
                return (
                  <div
                    key={index}
                    className="text-base font-roboto font-medium flex gap-[12px] items-center"
                  >
                    <IoMdCheckmarkCircleOutline className="text-primaryHover text-[24px]" />
                    {i}
                  </div>
                );
              })}
            </div>
          </div>
          <p className="section-description line-clamp-2 text-text_secondary lg:mb-[40px] mb-[20px]">
            Whether you’re a homeowner, business, or nonprofit, electricity
            costs can make up a large portion of your monthly expenses. Even if
            you don’t produce 100% of the energy you consume.
          </p>
          <div className="lg:mb-[56px] mb-[30px] lg:w-[527px] w-full">
            <p className="text-base font-roboto font-medium text-text_primary mb-[16px]">
              Quality Services
            </p>
            {percent > 0 && (
              <Tooltip
                title={`${percent}%`}
                overlayInnerStyle={{ backgroundColor: "green", color: "white" }}
                overlayClassName="custom-tooltip"
              >
                <Progress
                  percent={percent}
                  strokeColor={"#6FC464"}
                  strokeWidth={15}
                  percentPosition={{ align: "end", type: "outer" }}
                />
              </Tooltip>
            )}
          </div>
          <button className="bg-primary sm:px-[75px] px-[32px] py-[16px] font-roboto text-[18px] font-medium text-center text-white hover:bg-primaryHover rounded-[30px]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
