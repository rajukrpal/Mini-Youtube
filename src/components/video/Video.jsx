import moment from "moment";
import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { useSelector } from "react-redux";

const Video = ({channelTitle , headingTitle,benar,viewsCount,publishDate , duretionTime}) => {
  // console.log("ggg",duretionTime)

const {popularVideos} = useSelector((state,action)=>state.Video);
// console.log("ttt",popularVideos.contentDetails)

// const [duretion,setDuretion] =useState(null);
// const seconds = moment.duration(duretion).asSeconds();
// const _duretion = moment.utc(seconds * 1000).format("mm:ss")


const formatDuration = (duration) => {
  // Assuming duration is in ISO 8601 format like "PT12M17S"
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  const hours = match[1] ? parseInt(match[1], 10) : 0;
  const minutes = match[2] ? parseInt(match[2], 10) : 0;
  const seconds = match[3] ? parseInt(match[3], 10) : 0;

  // Format the duration string
  const formattedDuration = [];
  if (hours > 0) {
    formattedDuration.push(`${hours}h`);
  }
  if (minutes > 0) {
    formattedDuration.push(`${minutes}m`);
  }
  if (seconds > 0) {
    formattedDuration.push(`${seconds}s`);
  }

  return formattedDuration.join(" ");
}; 


  const formatViewsCount = (viewsCount) => {
    if (viewsCount >= 1e9) {
      return `${(viewsCount / 1e9).toFixed(1)}B`;
    } else if (viewsCount >= 1e6) {
      return `${(viewsCount / 1e6).toFixed(1)}M`;
    } else if (viewsCount >= 1e3) {
      return `${(viewsCount / 1e3).toFixed(1)}K`;
    } else {
      return viewsCount.toString();
    }
  };
  
  
  return (
    <div className="">
      <div className="pb-10">
        <div className="relative">
          <img
            className="rounded"
            src={benar}
            alt=""
          />
          <span className="absolute bottom-2 right-3 px-2 text-white bg-black-opacity-40 rounded-md">
            {formatDuration(duretionTime)}
          </span>
        </div>
        <div className="pt-2">
        <div>
          <div className="flex  py-1 gap-3">
            <img
              className="w-10 h-10  border ml-2 rounded-full"
              src="/logo.png"
              alt=""
            />
            <h5 style={{ lineHeight: "26px" }} className="yt-title px-1">
              {headingTitle}
            </h5>
          </div>
        </div>
        <div className="pl-[70px]">
          <p className="m-0 text-[#717171]">{channelTitle} </p>
        </div>
        <div className="flex items-center gap-2 pl-[70px] text-[#717171]">
          <span className="flex items-center gap-1">
            <IoMdEye size={22} />{formatViewsCount(viewsCount)} views •
          </span>
          <span className="">{moment(publishDate).fromNow() }</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
