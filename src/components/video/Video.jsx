import React from "react";
import { IoMdEye } from "react-icons/io";

const Video = () => {
  return (
    <div className="">
      <div className="pb-10">
        <div className="relative">
          <img
            className="rounded w-full"
            src="https://i.ytimg.com/vi/HCWvgoTfUjg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9hQhPGX0tXi2xYbEmG6YZlxmVxw"
            alt=""
          />
          <span className="absolute bottom-2 right-3 px-2 text-white bg-black-opacity-40 rounded-md">
            05:06
          </span>
        </div>
        <div className="">
        <div>
          <div className="flex  py-1 gap-3">
            <img
              className="w-10 h-10  border ml-2 rounded-full"
              src="/logo.png"
              alt=""
            />
            <h5 style={{ lineHeight: "26px" }} className="yt-title px-1">
              {" "}
              video title hello firend Lorem ipsum dolor sit amet, Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Alias, aut.{" "}
            </h5>
          </div>
        </div>
        <div className="pl-[70px]">
          <p className="m-0 text-[#717171]">Black Devloper</p>
        </div>
        <div className="flex items-center gap-2 pl-[70px] text-[#717171]">
          <span className="flex items-center gap-1">
            <IoMdEye size={22} /> 97M views •
          </span>
          <span className="">6 day Ago</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
