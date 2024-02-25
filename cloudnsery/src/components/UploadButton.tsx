"use client";
import { CldUploadButton } from "next-cloudinary";
import { Button } from "@/components/ui/button";

import React from "react";

function UploadButton() {
  return (
    <div className="flex bg-slate-400 py-3 px-5 rounded-3xl ">
      
        
          <CldUploadButton
            onUpload={(result: any) => {
              console.log(result.info.public_id);
            }}
            uploadPreset="cvvgsulo" 
          className="flex gap-3">
          Upload <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
          /> 
        </svg>  
        </CldUploadButton>
        
    </div>
  );
}

export default UploadButton;
