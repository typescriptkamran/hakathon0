"use client";
import Image from "next/image";
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from "react";
import { MenubarDemo } from "@/components/MenubarDemo";

type UploadResult = {
  info: {
    public_id: string;
  };
  event: 'success'
}


export default function Home() {
  let [imageId, setImageId] = useState('orpxf4zhxynhaxqmz10y')

  return (
    <main className="flex h-screen w-full flex-col p-24">
      <nav>
        
      </nav>
        
        <div>
      <CldUploadButton
      onUpload={(result: any) => {
        console.log(result.info.public_id)
        imageId = result.info.public_id;
      }} 
      uploadPreset="cvvgsulo" className="bg-slate-300 py-2 px-3 rounded-full"/>


      {imageId && (<CldImage
  width="400"
  height="300"
  src={imageId}
  sizes="100vw"
  alt="Description of my image"
/>)}



      </div>
    </main>
  );
}


 
