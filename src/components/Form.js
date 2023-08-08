"use client";
import React, { useState } from "react";
import styles from "@/styles/Add.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Form({ onSubmit, loading = false }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [url, setUrl] = useState("");
  const [type, setType] = useState("project");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      image,
      preview,
      link: url,
      type,
      password,
    };
    onSubmit(data);
  };
  return (
    <div className={styles.container}>
      <form action="" onSubmit={handleSubmit}>
        <h1>Add Data</h1>
        <select onChange={(e) => setType(e.target.value)}>
          <option value="project">Project</option>
          <option value="achievement">Achievement</option>
        </select>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image url"
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Source code url"
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Preview url"
          onChange={(e) => setPreview(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          Submit Data
          {loading && <FontAwesomeIcon icon={faSpinner} spin />}
        </button>
      </form>
    </div>
  );
}

export default Form;
