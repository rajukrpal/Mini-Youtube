import React from "react";
import Categoribar from "../categribar/Categoribar";
import Video from "../video/Video";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  //  const navigate = useNavigate();
  const isMobileScreen = useMediaQuery("(min-width:1440px)");


  return (
    <div className=" h-[92vh] px-1">
      <div className="sticky-top bg-custom-black-opacity m-0 p-0 px-4">
      <Categoribar />
      </div>
      <div className=" grid grid-cols-12 gap-3 ">
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


