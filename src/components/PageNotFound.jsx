import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="bg-black h-[100vh]">
        <div className="flex justify-center items-center h-[100vh]">
        <center>
        <p>Page Not Found</p>
        <Link to={"/"}>Go to Home Page</Link>
      </center>
        </div>
    
    </div>
  );
};

export default PageNotFound;
