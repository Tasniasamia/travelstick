"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Dropdown } from "antd";
import {
  IoChevronDownOutline,
  IoMenuOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { PiUser } from "react-icons/pi";

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const tourItems = ["/adventure", "/sightseeing", "/nature"];
  const destinationItems = ["/paris", "/london", "/tokyo"];
  const pagesItems = ["/blog", "/team", "/faq"];
  return (
    <div className=" w-full font-lato z-50 fixed top-0 left-0 ">
      <div className="container flex flex-row justify-between items-center lg:py-8 py-4 lg:px-0 px-2">
        <div className="sm:w-[153px] sm:h-[46px] w-auto h-[32px] flex justify-center items-center">
          <Image
            src="/logo.png"
            width={133}
            height={28}
            className="sm:h-[28px] sm:w-[133px] w-[110px] h-[28px]"
            alt="logo"
          />
        </div>
        <ul
          className={`list-none xl:gap-10 gap-6 items-center lg:flex 
        ${
          isMobileMenuOpen
            ? "flex flex-col absolute top-full left-0 w-full bg-black z-50 p-4"
            : "hidden"
        }
        lg:flex-row lg:static lg:bg-transparent`}
        >
          <li
            className={`text-[18px] font-medium hover:text-primary ${
              pathname === "/" ? "text-primary" : "text-white"
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`text-[18px] font-medium hover:text-primary ${
              pathname === "/about" ? "text-primary" : "text-white"
            }`}
          >
            <Link href="/about">About</Link>
          </li>
          <li className="text-[18px] font-medium text-white hover:text-primary">
            <Dropdown
              overlay={<DropdownMenu items={tourItems} />}
              trigger={["hover"]}
            >
              <span className="flex items-center gap-2 cursor-pointer">
                Tour
                <IoChevronDownOutline className="text-[20px] mt-[2px]" />
              </span>
            </Dropdown>
          </li>
          <li className="text-[18px] font-medium text-white hover:text-primary">
            <Dropdown
              overlay={<DropdownMenu items={destinationItems} />}
              trigger={["hover"]}
            >
              <span className="flex items-center gap-2 cursor-pointer">
                Destination
                <IoChevronDownOutline className="text-[20px] mt-[2px]" />
              </span>
            </Dropdown>
          </li>
          <li className="text-[18px] font-medium text-white hover:text-primary">
            <Dropdown
              overlay={<DropdownMenu items={pagesItems} />}
              trigger={["hover"]}
            >
              <span className="flex items-center gap-2 cursor-pointer">
                Pages
                <IoChevronDownOutline className="text-[20px] mt-[2px]" />
              </span>
            </Dropdown>
          </li>
          <li
            className={`text-[18px] font-medium hover:text-primary ${
              pathname === "/contact" ? "text-primary" : "text-white"
            }`}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex xl:gap-[18px] gap-2 items-center">
          <PiUser className="text-white sm:text-[20px] text-base" />
          <button className="font-lato font-medium sm:text-base text-sm sm:px-[49.5px] px-3 sm:py-4 py-2  bg-primary2 text-white rounded-full">
            Book A Trip
          </button>
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <IoCloseOutline className="sm:text-[20px] text-base" />
            ) : (
              <IoMenuOutline className="sm:text-[20px] text-base" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

export const DropdownMenu = ({ items = [] }) => {
  const pathname = usePathname();

  return (
    <div className="bg-white relative z-40 flex flex-col items-start w-[150px] shadow-xl">
      {items.map((path) => (
        <Link
          key={path}
          href={path}
          className={`${
            pathname === path
              ? "bg-primary text-white"
              : "bg-white text-textColor"
          } hover:bg-primary hover:text-white text-lg ps-[20px] py-[10px] w-full block`}
        >
          {path.replace("/", "").toUpperCase()}
        </Link>
      ))}
    </div>
  );
};
