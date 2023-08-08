"use client";
import { toast } from "react-toastify";
import Layout from "@/components/Layout";
import { saveData } from "@/actions/saveData";
import Form from "@/components/Form";
import { useState } from "react";

function page() {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (data) => {
    if (!data.title || !data.image || !data.link || !data.type) {
      return toast.error("Please fill all the fields!");
    }
    setLoading(true);
    try {
      await saveData(data, "/add");
      toast.success("Data added successfully");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit} loading={loading} />
    </Layout>
  );
}

export default page;
