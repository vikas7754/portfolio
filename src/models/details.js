import mongoose from "mongoose";
const Schema = mongoose.Schema;
const DetailsSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    preview: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Details =
  mongoose.models.Details || mongoose.model("Details", DetailsSchema);
export default Details;
