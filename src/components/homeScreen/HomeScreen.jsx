import React from "react";
import Categoribar from "../categribar/Categoribar";
import Video from "../video/Video";
import { useMediaQuery } from "@mui/material";

const HomeScreen = () => {
  const isMobileScreen = useMediaQuery("(min-width:1440px)");
  return (
    <div className=" h-[92vh] px-6 ">
      <div className="sticky-top bg-custom-black-opacity ">
      <Categoribar />
      </div>
      <div className=" grid grid-cols-12 gap-3">
     {
        [...new Array(20)].map(()=>(
            // <div className="lg:col-span-4  sm:col-span-6 col-span-12 border border-black">
            <div className={isMobileScreen ? "col-span-3 border border-black" : "lg:col-span-4  sm:col-span-6 col-span-12 border border-black"}>
                <div className="">
                <Video /> 
                </div>

            </div>
        ))
     }
      </div>
    </div>
  );
};

export default HomeScreen;


