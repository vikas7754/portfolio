"use client";
import React, { useState } from "react";
import styles from "@/styles/Contact.module.scss";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      return toast.error("Please fill all the fields");
    }
    setLoading(true);
    const data = {
      name,
      email,
      message,
    };
    try {
      const res = await axios.post(
        "https://api.freecodez.com/api/contact",
        data
      );
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setMessage("");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error(
        err?.response?.data?.message || err.message || "Something went wrong"
      );
    }
  };
  return (
    <div className={styles.container}>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          rows="5"
          value={message}
          placeholder="Your message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit" disabled={loading}>
          Send Message
          {loading && <FontAwesomeIcon icon={faSpinner} spin />}
        </button>
      </form>
    </div>
  );
}

export default Contact;
