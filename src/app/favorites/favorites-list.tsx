"use client"
import React, { useEffect, useState } from 'react'
import cloudinary from 'cloudinary'
import { CldImage } from 'next-cloudinary'
import CloudinaryImage from '../../components/cloudinaryImage'
import { SearchResult } from '../gallery/page';
import { ForceRefresh } from '@/components/force-refresh';
import { ImageGrid } from '@/components/image-grid'

export default function FavoirtesList ({
    initialResources,
}:{
        initialResources: SearchResult[];
    })    
    {
        const [resources, setResources] = useState(initialResources);
        useEffect(() =>{
            setResources(initialResources);
        }, [initialResources])
  return (
    <ImageGrid 
    images={resources}
          getImage={(imageData: SearchResult)=>{
            return(
                <CloudinaryImage
                //  path = '/favorite'
                 key = {imageData.public_id}
                 imageData = {imageData}
                 width = "400"
                 height = "300"
                 alt = "an image of somthing here"
                 onUnheart = {(unheartResources) =>{
                    setResources(currentResources =>{
                        return currentResources.filter(resource =>{
                            return resource.public_id !== unheartResources.public_id
                        
                        })
                    })
                 }}
                 />
            )
          }}
        />
      
  )
}



