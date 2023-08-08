"use client";
import { toast } from "react-toastify";
import Layout from "@/components/Layout";
import { saveData } from "@/actions/saveData";
import Form from "@/components/Form";

function page() {
  const handleSubmit = async (data) => {
    if (!data.title || !data.image || !data.link || !data.type) {
      return toast.error("Please fill all the fields!");
    }
    try {
      await saveData(data, "/add");
      toast.success("Data added successfully");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit} />
    </Layout>
  );
}

export default page;
