import Image from "next/image";
import React from "react";
import logo from "../public/logo.svg";

const Header = () => {
  return (
    <div className="flex w-auto mt-10">
      <div className="w-[58px] h-[58px] relative bg-white">
        <Image src={logo} alt="logo"/>
      </div>

      <div className=" flex flex-col ml-2">
        <p className="font-inter font-[600] text-[24px] opacity-60 leading-[28px]">
          Segwise
        </p>
        <p className="font-inter font-[400] text-[24px] opacity-60 leading-[28px] tracking-[-0.04em]">
          Front End Test
        </p>
      </div>
    </div>
  );
};

export default Header;
