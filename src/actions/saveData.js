"use server";
import { connectToDB } from "@/db/config";
import Details from "@/models/details";
import { revalidatePath } from "next/cache";

export async function saveData(data, path) {
  connectToDB();
  const newDetails = new Details({
    title: data.title,
    image: data.image,
    link: data.link,
    preview: data?.preview || "",
    type: data.type,
  });
  try {
    if (data.password !== process.env.NEXT_PUBLIC_PASSWORD) {
      throw new Error("You are not authorized to add data!");
    }
    await newDetails.save();
    if (path === "/add") {
      revalidatePath(path);
    }
  } catch (err) {
    throw new Error(err.message);
  }
}
