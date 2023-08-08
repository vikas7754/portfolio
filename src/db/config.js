import mongoose from "mongoose";
let isConnected = false;
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.NEXT_PUBLIC_DB_URL) {
    return console.log("DB url not found!");
  }
  if (isConnected) return console.log("Already connected");
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_DB_URL);
    isConnected = true;
    console.log("DB Connected");
  } catch (e) {
    console.log(e.message);
  }
};
