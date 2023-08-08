"use client";
import { getData } from "@/actions/getData";
import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import styles from "@/styles/Projects.module.scss";
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";

function page() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function getProjects() {
      try {
        const data = await getData("project");
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Something went wrong");
        setLoading(false);
      }
    }
    getProjects();
  }, []);
  return (
    <Layout>
      <div>
        <h1 style={{ textAlign: "center" }}>My Projects</h1>
        <div className={styles.container}>
          {loading && <Loader />}
          {error && <div>{error}</div>}
          {!loading &&
            !error &&
            projects.length > 0 &&
            projects.map((project, i) => <Card key={i} data={project} />)}
        </div>
      </div>
    </Layout>
  );
}

export default page;
