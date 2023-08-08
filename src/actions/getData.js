"use server";
import { connectToDB } from "@/db/config";
import Details from "@/models/details";

export async function getData(type, limit = 1000) {
  connectToDB();
  try {
    const data = await Details.find({ type }).limit(limit);
    const res = data.map((item) => {
      return {
        title: item.title,
        image: item.image,
        link: item.link,
        preview: item.preview,
        type: item.type,
      };
    });
    return res;
  } catch (err) {
    throw new Error(err.message);
  }
}
