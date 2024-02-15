import mongoose, { Document, Schema, model } from 'mongoose';
import { models } from 'mongoose';

export interface Video extends Document {
    link: string;
    id: string;
    image: string;
    title: string;
    duration: string;
    rating?: number | null;
    video: string;
}

 export interface Category extends Document {
    Category: string;
    data: Video[];
}

const VideoSchema = new Schema<Video>({
    link: { type: String, required: true },
    id: { type: String, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    duration: { type: String },
    rating: { type: Number },
    video: { type: String, required: true }
});

const CategorySchema = new Schema<Category>({
    Category: { type: String, required: true },
    data: [VideoSchema]
});

export const CategoryModel = models.Category || model('Category', CategorySchema);