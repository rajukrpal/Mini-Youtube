// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
// import NavBar from "../header/NavBar";
// import SideBar from "../sidebar/SideBar";
// import { useMediaQuery } from "@mui/material";


// const RootLayout = () => {
//   const isMobileScreen = useMediaQuery("(max-width:767px)");
//   const [sideBarMenu,setSideBarMenu] = useState(isMobileScreen ? false : true)

//   const handalSideBarMenu = ()=>{
//     setSideBarMenu(!sideBarMenu)
//   }
//   return (
//     <div>
//       <NavBar  handalSideBarMenu={handalSideBarMenu} />
//       <div className="flex h-[92vh]">
//       <SideBar sideBarMenu={sideBarMenu} />
//       <main className="w-full">
//         <Outlet />
//       </main>
//       </div>
//     </div>
//   );
// };

// export default RootLayout;


import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../header/NavBar";
import SideBar from "../sidebar/SideBar";
import { useMediaQuery } from "@mui/material";


const RootLayout = () => {
  const isMobileScreen = useMediaQuery("(max-width:767px)");
  const [sideBarMenu,setSideBarMenu] = useState(isMobileScreen ? false : true)

  const handalSideBarMenu = ()=>{
    setSideBarMenu(!sideBarMenu)
  }
  return (
    <div className="flex flex-col h-screen">
    <NavBar handalSideBarMenu={handalSideBarMenu} />
    <div className="flex flex-1 overflow-hidden">
      <SideBar sideBarMenu={sideBarMenu} />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  </div>
  );
};

export default RootLayout;


