import memories from "../Images/memories.png";
// import Link from 'react-router-dom'
import { useNavigate,useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  // console.log(user)
  const location = useLocation();
  
 


  


  return (
    <div className="  rounded-lg mx-[90px]  flex justify-between items-center mt-3 drop-shadow-md py-1">
      <div className="flex justify-start space-x-4">
        <h2 className="font-mono font-medium tracking-[15px] uppercase text-[40px]  ">
          WISHES
        </h2>
        <img src={memories} height={60} width={60} alt="" />
      </div>

    
    </div>
  );
}
