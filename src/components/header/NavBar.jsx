import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiGridFill } from "react-icons/ri";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { AiOutlineMenu } from "react-icons/ai";


import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";

const NavBar = ({handalSideBarMenu}) => {
  const {user} = useSelector((state,action)=>state.Auth)
  const image = user?.photoURL ;
  // console.log("image",user)
  const isMobileScreen = useMediaQuery("(max-width:767px)");
  return (
    <div className="border border-black">
      <div className="flex justify-between items-center px-3 py-2">
        <div className="">
          {isMobileScreen ? (
            <AiOutlineMenu onClick={()=>handalSideBarMenu()} size={25} />
          ) : (
            <img className="w-14 h-12" src="/navbar/youtube_logo.png" alt="" />
          )}
        </div>
        <div className={isMobileScreen ? "w-[70%]" : "w-[30%]"}>
          <form className="flex items-center bg-transparent py-1 px-1 rounded border  ">
            <input
              className=" bg-transparent w-full outline-none"
              type="text"
              placeholder="Search..."
            />
            <button className="" type="submit">
              <IoIosSearch size={22} />
            </button>
          </form>
        </div>
        <div>
          {isMobileScreen ? (
            <Stack direction="row" spacing={1}>
              <Avatar
                sx={{ width: 30, height: 30 }}
                alt={user?.displayName}
                src={image}
              />
            </Stack>
          ) : (
            <Box
              display="flex"
              alignItems="center"
              gap={{ xs: 1, sm: 3, md: 4 }} // Responsive gap based on screen size
            >
              <IoIosNotificationsOutline size={25} />
              <RiGridFill size={20} />
              <Stack direction="row" spacing={1}>
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  alt={user?.displayName}
                  src={image }
                />
              </Stack>
            </Box>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
