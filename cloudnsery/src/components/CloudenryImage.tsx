"use client";
import { CldImage } from "next-cloudinary";
import React from "react";
import Heart from "./Heart";

function CloudenryImage(props: any & {public_id: string}) {
  return (
    <div className=" relative ">
      

        <CldImage {...props} />
        
        <Heart
        onClick={() => {

        }} 
        className=" absolute top-2 right-2 " />
        
      
    </div>
  );
}

export default CloudenryImage;
