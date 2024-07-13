

import React, { useState } from "react";
import { Typography, Divider } from "@mui/material";
import { SlHome } from "react-icons/sl";
import { MdSubscriptions, MdHistory, MdLibraryAddCheck } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiSmileySad } from "react-icons/pi";
import { AiOutlineLogout } from "react-icons/ai";

const SideBar = ({ sideBarMenu }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isMobileScreen = window.innerWidth <= 767; // Adjust based on your media query needs

  const menuItems = [
    { icon: <SlHome size={24} />, label: "Home" },
    { icon: <MdSubscriptions size={24} />, label: "Subscription" },
    { icon: <IoIosHeartEmpty size={24} />, label: "Like" },
    { icon: <MdHistory size={24} />, label: "History" },
    { icon: <MdLibraryAddCheck size={24} />, label: "Library" },
    { icon: <PiSmileySad size={24} />, label: "I know" },
    {
      icon: <AiOutlineLogout size={24} />,
      label: "Log Out",
      showDivider: true,
    },
  ];

  return (
    <div
      style={{
        opacity: sideBarMenu ? 1 : 0,
        transform: sideBarMenu ? "translateX(0)" : "translateX(-100%)",
        transition: "opacity 0.5s ease, width 0.5s ease, transform 0.5s ease",
      }}
    >
      {sideBarMenu && (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              {/* Render Divider only before the "Log Out" item */}
              {item.showDivider && index === menuItems.length - 1 && (
                <Divider sx={{ borderColor: "white", my: 1 }} />
              )}
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: isMobileScreen ? "16px 16px" : "10px 16px",
                  gap: "8px",
                  borderRadius: "4px",
                  transition: "background-color 0.3s",
                  color: "white",
                  backgroundColor: hoveredIndex === index ? "red" : isMobileScreen ? "transparent" : "inherit",
                  cursor: "pointer", // Add cursor pointer style
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {item.icon}
                {!isMobileScreen && (
                  <Typography variant="body1">{item.label}</Typography>
                )}
              </li>
            </React.Fragment>
          ))}
          {/* Divider before the "Log Out" item */}
          {menuItems[menuItems.length - 1].showDivider && !isMobileScreen && (
            <Divider sx={{ borderColor: "white", my: 1 }} />
          )}
        </ul>
      )}
    </div>
  );
};

export default SideBar;
