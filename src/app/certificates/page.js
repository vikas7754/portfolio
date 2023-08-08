"use client";
import { getData } from "@/actions/getData";
import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import styles from "@/styles/Projects.module.scss";
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";

function page() {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function getAchievements() {
      try {
        const data = await getData("achievement");
        setAchievements(data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Something went wrong");
        setLoading(false);
      }
    }
    getAchievements();
  }, []);
  return (
    <Layout>
      <div>
        <h1 style={{ textAlign: "center" }}>My Achievements</h1>
        <div className={styles.container}>
          {loading && <Loader />}
          {error && <div>{error}</div>}
          {!loading &&
            !error &&
            achievements.length > 0 &&
            achievements.map((achievement, i) => (
              <Card key={i} data={achievement} />
            ))}
        </div>
      </div>
    </Layout>
  );
}

export default page;
