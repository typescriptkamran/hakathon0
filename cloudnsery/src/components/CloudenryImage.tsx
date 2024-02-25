"use client";
import { CldImage } from "next-cloudinary";
import React from "react";
import Heart from "./Heart";
import cloudinary from 'cloudinary'

function CloudenryImage(props: any & {publicId: string}) {
  return (
    <div className=" relative ">
      

        <CldImage {...props} />
        
        <Heart
        onClick={() => {
          cloudinary.v2.uploader.add_tag('faverite', [props.publicId])

        }} 
        className=" absolute top-2 right-2 " />
        
      
    </div>
  );
}

export default CloudenryImage;
