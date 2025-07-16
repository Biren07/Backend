import { v2 as cloudinary } from "cloudinary";
import getDataUri from "../utils/datauri.js";

import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.API_SECRET,
});

export const uploadToCloudinary = async (file) => {
  const fileUri = getDataUri(file);

  const result = await cloudinary.uploader.upload(fileUri.content, {
    folder: "jobportal", // 🔴 Yahan apne banaye folder ka naam do
  });
}

export default cloudinary;
