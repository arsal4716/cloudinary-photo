"use client"
import Heart from "@/components/icons/Heart"
import { CldImage, CldImageProps } from "next-cloudinary"
import {setAsFavorite} from '../app/gallery/actions'
import {useState, useTransition } from "react"
import  { SearchResult } from '../app/gallery/page'
import FullHeart from "@/components/icons/FullHeart"
import { ImageMenu } from "./image-menu"


export default function CloudinaryImage(props:
     {
    imageData:SearchResult; path: string, 
    onUnheart?:(unheartResources: SearchResult) => void;
} & Omit <CldImageProps, "src" >
) {
    const [transition, startTrasition] = useTransition();
    const {imageData,onUnheart} = props;
    const [isFavorited, setIsfavorited] = useState(
        imageData.tags.includes('favorite')
    )

   

 return(
    <div className="relative">
        <CldImage {...props}
         src={imageData.public_id} 
         alt="image here" />
        { isFavorited ? (

     <FullHeart 
    onClick={() =>{
        onUnheart?.(imageData);
        setIsfavorited(true)
    startTrasition(() => {
        setAsFavorite(imageData.public_id, true);
        
        });
        
}}

className="absolute top-2 left-2  hover:text-white text-red-600 cursor-pointer"
/>   
)     
:( 
        <Heart 
        onClick={() =>{
            setIsfavorited(false)
            startTrasition(() => {
                setAsFavorite(imageData.public_id, false)
            });
            
        }}
        className="absolute top-2 left-2  hover:text-red-700 text-white cursor-pointer"
        />
        
        )}
        <ImageMenu
        image={imageData}
        />
    </div>
)
       

}