"use server"

import { connectToDatabase } from "../database";
import { CategoryModel } from "../database/models/category.model";



export async function uploadToMongoDB(data:any) {
    await connectToDatabase();
    await CategoryModel.insertMany(data);
    console.log('Data uploaded to MongoDB successfully');
  }
  
  export const UploadJsonData = async (file:string) => {
    const data = JSON.parse(file)    
    await uploadToMongoDB(data);
    
  }