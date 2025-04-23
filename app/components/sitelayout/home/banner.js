"use client";
import React, { useState } from "react";
import { TbMapPins } from "react-icons/tb";
import { LuHotel } from "react-icons/lu";
import { TbDevicesQuestion } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";

const Banner = () => {
  const [obj, setObj] = useState({
    destination: null,
    tour: null,
    from: null,
    duration: null,
  });
  const [tab, setTab] = useState("tour");
  return (
    <div
      style={{
        backgroundImage: 'url("/hero-banner.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[1024px] lg:mb-[120px] mb-[60px]"
    >
      <div className="w-full h-full bg-black bg-opacity-[50%]">
        <div className="container flex flex-col  justify-center items-center pt-[172px]">
          <button
            style={{
              backgroundImage: 'url("/btn-bg.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="text-[28px]  font-medium leading-[100%] font-dancing-script text-text_primary w-[273px] h-[68px] flex flex-col justify-center"
          >
            Wander the World
          </button>
          <h1 className="hero-header mt-[16px] xl:w-[1095px] lg:w-[1000px] sm:w-[580px]  w-full  text-white">
            Curated Adventures for the Discerning Traveler
          </h1>
          <p className="section-description lg:w-[871px] text-center md:w-[668px] sm:w-[580px] md:px-0 px-2 w-full text-white mt-[24px]">
            Discover unforgettable destinations with Travel Stick. We bring you
            closer to the world with handpicked adventures and stress-free
            booking.
          </p>
          <button className="leading-[26px] lg:mt-[59px] mt-[30px] font-lato font-medium sm:text-[18px] text-sm sm:px-[55px] px-3 sm:py-[18px] py-2  bg-primary text-white rounded-full">
            View Packages
          </button>
          <div className="flex flex-wrap mx-auto items-center rounded-t-[10px] xl:mt-[132px] mt-[60px]">
            <button
              className={`text-base rounded-tl-[10px] font-lato font-medium flex gap-[8px] items-center py-[18px] px-[32.5px]  text-text_primary ${
                tab === "tour"
                  ? "bg-primary2 text-white"
                  : "bg-white text-text_primary"
              }`}
              onClick={() => {
                setTab("tour");
              }}
            >
              <TbMapPins />
              <span>Tour</span>
            </button>
            <button
              className={`text-base font-lato font-medium  flex gap-[8px] items-center py-[18px] px-[32.5px]  text-text_primary ${
                tab === "hotel"
                  ? "bg-primary2 text-white"
                  : "bg-white text-text_primary"
              }`}
              onClick={() => {
                setTab("hotel");
              }}
            >
              <LuHotel />
              <span>Hotel</span>
            </button>

            <button
              className={`text-base font-lato font-medium rounded-tr-[10px] flex gap-[8px] items-center py-[18px] px-[32.5px]  text-text_primary ${
                tab === "visa"
                  ? "bg-primary2 text-white"
                  : "bg-white text-text_primary"
              }`}
              onClick={() => {
                setTab("visa");
              }}
            >
              <TbDevicesQuestion />
              <span>Visa</span>
            </button>
          </div>
          <div
            className="p-[32px] bg-white xl:flex grid sm:grid-cols-3 grid-cols-1 gap-[24px] items-center rounded-[20px]"
            style={{ boxShadow: "0px 80px 200px -12px #0F1C331F" }}
          >
            <SelectComponent
              label="Destination"
              name="destination"
              placeholder={"Search Destination"}
              array={[
                { name: "Dhaka", value: "dhaka" },
                { name: "Khulna", value: "khulna" },
              ]}
              onChange={(e) => {
                let newValue = e?.target?.value;
                setObj((prev) => ({ ...prev, destination: newValue }));
              }}
            />

            <SelectComponent
              label="Tour Type"
              name="tourtype"
              placeholder={"Search Tour Type"}
              array={[
                { name: "office", value: "Office" },
                { name: "bachelor", value: "bachelor" },
              ]}
              onChange={(e) => {
                let newValue = e?.target?.value;
                setObj((prev) => ({ ...prev, tour: newValue }));
              }}
            />
            <SelectComponent
              label="Start From"
              name="from"
              placeholder={"Search Tour Type"}
              array={[
                { name: "office", value: "Office" },
                { name: "bachelor", value: "bachelor" },
              ]}
              onChange={(e) => {
                let newValue = e?.target?.value;
                setObj((prev) => ({ ...prev, from: newValue }));
              }}
            />
            <SelectComponent
              label="Duration"
              name="duration"
              placeholder={"1 Traveler"}
              array={[
                { name: "3", value: "3" },
                { name: "4", value: "4" },
              ]}
              onChange={(e) => {
                let newValue = e?.target?.value;
                setObj((prev) => ({ ...prev, duration: newValue }));
              }}
            />
            <div className="sm:col-span-1 col-span-2">
            <button className="flex gap-2 w-full justify-center items-center font-lato font-medium sm:text-base text-sm px-[32px] py-[18px]  bg-primary text-white rounded-full">
              <FaSearch />
              Search
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

export const SelectComponent = ({
  label,
  name,
  array,
  placeholder,
  onChange,
}) => {
  return (
    <div class="form-control">
      <label
        for={name}
        className="leading-[18px] font-lato font-normal text-[12px] text-[#717171]"
      >
        {label}
      </label>
      <select name={name} className="select-item" onChange={onChange}>
        <option value="" disabled selected hidden>
          {placeholder}{" "}
        </option>
        {array.map((i, index) => {
          return (
            <option value={i?.value} key={index}>
              {i?.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
