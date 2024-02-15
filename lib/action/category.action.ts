"use server"

import mongoose, { Mongoose } from "mongoose";
import { connectToDatabase } from "../database";
import { CategoryModel, Video } from "../database/models/category.model";
import { handleError } from "../utils";




export const getCategoryById = async (id: string | undefined) => {
  try {
    await connectToDatabase();

    const categories = await CategoryModel.findById(id);

    const collection = JSON.parse(JSON.stringify(categories));
    return collection.data;
  } catch (error) {
    handleError(error)
  }
}

export async function findVideoByIdInCategory(videoId: string | undefined): Promise<Video | null> {
  try {
    const result = await CategoryModel.aggregate([
      { $unwind: '$data' }, // Unwind the data array
      { $match: { 'data._id': new mongoose.Types.ObjectId(videoId) } }
    ]);

    if (result.length > 0) {
      // Return the first matching video object
      return result[0].data;
    } else {
      // Video not found in any category
      return null;
    }
  } catch (error) {
    console.error('Error finding video in category:', error);
    return null;
  }
}

export async function findRandomVideosInCategory(categoryId: string | undefined, numberOfVideos: number): Promise<Video[] | null> {
  try {
    const result = await CategoryModel.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(categoryId) } }, // Match the category _id
      { $unwind: '$data' }, // Unwind the data array
      { $sample: { size: numberOfVideos } } // Retrieve multiple random documents from the data array
    ]);

    const randomVideos: Video[] = result.map((entry: any) => entry.data);

    return randomVideos;
  } catch (error) {
    console.error('Error finding random videos in category:', error);
    return null;
  }
}

export const getRandomVideos = async () => {
    await connectToDatabase();
    const randomCollection: Video[] = [];

    const categories = await CategoryModel.find();
    if(categories.length === 0) {
      return null; // Return null if categories is empty
    }

    categories.map((items) => {
      for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * 100);
        const item: Video = items.data[randomIndex];
        randomCollection.push(item);
      }})
    return JSON.parse(JSON.stringify(randomCollection));

}


// export const getRelatedVideos = async (id: string | undefined) => {
//   await connectToDatabase();
//   const relatedCollection: Video[] = [];
//   const categories = await CategoryModel.findById(id);

//   for (let i = 0; i < 8; i++) {
//     const randomIndex = Math.floor(Math.random() * 100);
//     const item: Video = categories.data[randomIndex];
//     relatedCollection.push(item);

//   }
// }





