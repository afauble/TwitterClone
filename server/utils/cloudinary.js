import { v2 as cloudinary } from "cloudinary";

export const uploadToCloudinary = (image) => {
    return new Promise((resolve, reject) => {
        const config = useRuntimeConfig()
        
        cloudinary.config({
            cloud_name: config.cloudinaryCloudName,
            api_key: cloudinaryApiKey,
            api_secret: cloudinaryApiSecret
        })
        
        cloudinary.uploader.upload(image, (error, data) => {
            if(error) {
                reject(error)
            }

            resolve(data)
        })
    })
}