"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Dropdown } from "antd";
import { IoChevronDownOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownMenu = (
    <div className="bg-white relative z-40 flex flex-col items-start w-[150px] shadow-xl">
      {["/blog", "/team", "/faq"].map((path) => (
        <Link
          key={path}
          href={path}
          className={`${
            pathname === path ? "bg-primary text-white" : "bg-white text-textColor"
          } hover:bg-primary hover:text-white text-lg ps-[20px] py-[10px] w-full block`}
        >
          {path.replace("/", "").toUpperCase()}
        </Link>
      ))}
    </div>
  );

  return (
    <div className="container bg-black font-lato flex justify-between items-center py-8 relative">
      <div className="sm:w-[153px] sm:h-[46px] w-[120px] h-[36px] flex justify-center items-center">
        <Image
          src="/logo.png"
          width={133}
          height={28}
          className="sm:h-[28px] sm:w-[133px] w-[110px] h-[28px]"
          alt="logo"
        />
      </div>

      {/* Hamburger icon for small screens */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
      </button>

      {/* Navigation Menu */}
      <ul
        className={`list-none gap-10 items-center md:flex 
        ${isMobileMenuOpen ? "flex flex-col absolute top-full left-0 w-full bg-black z-50 p-4" : "hidden"}
        md:flex-row md:static md:bg-transparent`}
      >
        <li className={`text-[18px] font-medium hover:text-primary ${pathname === "/" ? "text-primary" : "text-white"}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`text-[18px] font-medium hover:text-primary ${pathname === "/about" ? "text-primary" : "text-white"}`}>
          <Link href="/about">About</Link>
        </li>
        <li className="text-[18px] font-medium text-white hover:text-primary">
          <Dropdown overlay={dropdownMenu} trigger={["hover"]}>
            <span className="flex items-center gap-2 cursor-pointer">
              Tour
              <IoChevronDownOutline className="text-[20px] mt-[2px]" />
            </span>
          </Dropdown>
        </li>
        <li className="text-[18px] font-medium text-white hover:text-primary">
          <Dropdown overlay={dropdownMenu} trigger={["hover"]}>
            <span className="flex items-center gap-2 cursor-pointer">
              Destination
              <IoChevronDownOutline className="text-[20px] mt-[2px]" />
            </span>
          </Dropdown>
        </li>
        <li className="text-[18px] font-medium text-white hover:text-primary">
          <Dropdown overlay={dropdownMenu} trigger={["hover"]}>
            <span className="flex items-center gap-2 cursor-pointer">
              Pages
              <IoChevronDownOutline className="text-[20px] mt-[2px]" />
            </span>
          </Dropdown>
        </li>
        <li className={`text-[18px] font-medium hover:text-primary ${pathname === "/contact" ? "text-primary" : "text-white"}`}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

    
   <button>
    
   </button>

    </div>
  );
};

export default Header;
