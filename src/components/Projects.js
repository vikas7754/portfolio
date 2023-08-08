"use client";
import { getData } from "@/actions/getData";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "./Loader";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function getProjects() {
      try {
        const data = await getData("project", 8);
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
    <div>
      {loading && <Loader />}
      {error && <div>{error}</div>}
      {!loading &&
        !error &&
        projects.length > 0 &&
        projects.map((project, i) => <Card key={i} data={project} />)}
    </div>
  );
}

export default Projects;
