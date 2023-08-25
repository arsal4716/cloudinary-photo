"use client"
import Image from 'next/image'
import { CldUploadButton } from 'next-cloudinary'
import { CldImage } from 'next-cloudinary';
import React, { useState } from 'react';

 type UploadResult = {
  info: {
    public_id: string;
  },
  event:"success"
};

export default function Home() {
  const [imageId, setImageId] = useState("r7svgniudw55adb4ap1b");
  return (
    <>
      <main className='flex min-h-screen flex-col items-center justify-center'>
      <CldUploadButton
       onUpload ={(result:UploadResult) => {
        setImageId(result.info.public_id)
      }}
      uploadPreset="spmbtg0o" 
      />

      {imageId && (
      <CldImage
  width="400"
  height="100"
  src={imageId}
  // blurFaces
  // cartoonify
  // tint="70:blue:green:purple"
  sizes="100vw"
  alt="Description of my image"
/>
)}

      </main>
 
    </>
  )
  }
  
