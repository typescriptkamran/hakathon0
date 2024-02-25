"use client";
import { CldImage } from "next-cloudinary";
import { useState } from "react";
import UploadButton from "@/components/UploadButton";

type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  let [imageId, setImageId] = useState("orpxf4zhxynhaxqmz10y");

  return (
    <main className="flex h-screen w-full flex-col p-24">
      <nav>
        <UploadButton />
      </nav>

      <div>

        {imageId && (
          <CldImage
            width="400"
            height="300"
            src={imageId}
            sizes="100vw"
            alt="Description of my image"
          />
        )}
      </div>
    </main>
  );
}
