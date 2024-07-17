import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useDispatch,  useSelector } from "react-redux";
import { login } from "../../app/features/authSlise";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {accessToken} = useSelector((state,action)=> state.Auth);
  

  useEffect(()=>{

  

    if(accessToken){
      navigate('/')
    }else{
      console.log("errororroror")
    }
  },[accessToken])



  const handleLogine =()=>{
    dispatch(login())
  }
  return (
    <div className="bg-black-opacity-40 ">
      <div className="flex justify-center items-center  h-[100vh] ">
        <div className="">
          <div className="flex justify-center items-center">
            <img className="w-32 " src="/logo.png" alt="" />
          </div>
          <div className="flex justify-center items-center pb-10">
            <Button onClick={handleLogine} size="small" variant="contained">Login With Google</Button>
          </div>
          <p className="capitalize flex justify-center items-center">
            This Project is made using Youtube data Api
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
