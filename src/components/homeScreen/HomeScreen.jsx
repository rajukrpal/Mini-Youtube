import React, { useEffect } from "react";
import Categoribar from "../categribar/Categoribar";
import Video from "../video/Video";
import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideo } from "../../app/features/videoSlise";
import { getPopularVideoIcon } from "../../app/features/iconSlise";

const HomeScreen = () => {
  const isMobileScreen = useMediaQuery("(min-width:1440px)");
  const dispatch = useDispatch();

  const {popularVideos} = useSelector((state,action)=>state.Video);


  useEffect(() => {

    const featch = async()=>{
      await dispatch(getPopularVideo())
    }
    featch()
  }, [dispatch]); 
  
  useEffect(() => {

    const featch = async()=>{
      await dispatch(getPopularVideoIcon())
    }
    featch()
  }, [dispatch]); 

 
  


  return (
    <div className=" h-[92vh] px-1">
      <div className="sticky-top bg-custom-black-opacity m-0 p-0 px-4">
      <Categoribar />
      </div>
      <div className=" grid grid-cols-12 gap-3 py-1 ">
     {
        popularVideos.map((item)=>(
            // <div className="lg:col-span-4  sm:col-span-6 col-span-12 border border-black">
            <div key={item.id} className={isMobileScreen ? "col-span-3 border border-black" : "lg:col-span-4  sm:col-span-6 col-span-12 border border-black"}>
                <div className="">
                <Video
                 channelTitle={item.snippet.channelTitle} 
                 headingTitle={item.snippet.title}   
                 benar={item.snippet.thumbnails.maxres?.url} 
                 viewsCount={item.statistics.viewCount}
                 publishDate={item.snippet.publishedAt}
                 duretionTime={item.contentDetails.duration}
                 /> 
                </div>

            </div>
        ))
     }
      </div>
    </div>
  );
};

export default HomeScreen;


