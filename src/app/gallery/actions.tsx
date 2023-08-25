"use server";
import cloudinary from 'cloudinary'
export async function setAsFavorite(
    publicId:string,
    isFavorite: boolean,
   
    ){
        if(isFavorite){
            console.log('removing from favorite' + publicId)
    await cloudinary.v2.uploader.remove_tag("favorite", [publicId])
}
else{
    await cloudinary.v2.uploader.add_tag("favorite", [publicId])

}

}
