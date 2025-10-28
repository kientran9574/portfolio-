"use client";

import Code from "@/components/icon/Code";
import Download from "@/components/icon/Download";
import { NavLinks } from "@/constants/nav";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface IProps {
  handleShowMenu: () => void;

  showMenuBar: boolean; // Thêm prop này
}
const Nav = ({ handleShowMenu, showMenuBar }: IProps) => {
  const [navBar, setNavBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) setNavBar(true);
      if (window.scrollY < 90) setNavBar(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`transition-all duration-200 h-[10vh] z-30 fixed w-full ${
        navBar ? "bg-[#0f142ed9] shadow-md" : "fixed"
      }`}
    >
      <div className="flex items-center justify-between h-full w-[90%] mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="size-10 bg-white rounded-full flex items-center justify-center ">
            <Code className="size-5 text-black shrink-0"></Code>
          </div>
          <div className="font-bold text-2xl">KO DEV</div>
        </div>
        {/* Nav item */}
        <div className="hidden lg:flex lg:items-center md:space-x-6 lg:space-x-7">
          {NavLinks.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.id}
                className="text-white text-base hover:text-blue-500 transition-all duration-200"
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
        <button
          className="ml-2 block cursor-pointer text-white lg:hidden"
          onClick={() => handleShowMenu()}
        >
          {!showMenuBar ? (
            // Icon Hamburger khi menu đóng
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            // Icon X khi menu mở
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Nav;
