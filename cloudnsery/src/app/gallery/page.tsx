
import Image from "next/image";
import UploadButton from "@/components/UploadButton";
import cloudinary from "cloudinary";
import { CldImage } from "next-cloudinary";
import CloudenryImage from "@/components/CloudenryImage";

type SearchResults = {
    public_id: string
}

export default async function Home() {
   const result =  (await cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by('created_at', 'desc')
  .max_results(30)
  .execute()) as { resources: SearchResults[] } 
  
  return (
    <div className="flex flex-col w-full h-screen py-6 px-5">
      <section className="flex justify-between w-full items-baseline gap-5 py-5 px-5 ">
        <h1>Gallery Images</h1>
        <div>
            <UploadButton />
          
          </div>
          </section>
          <section className="grid grid-rows-4 grid-flow-col gap-4 ">

          {result.resources.map((result) =>
          <CloudenryImage
          key = {result.public_id}
          src = {result.public_id}
          publicId ={result.public_id}
          width = "400"
          height = "300"
          sizes="100vw"
          alt = "something"
        

           />
          )}
          </section>
        
      
    </div>
  );
}
