import React, { useState } from "react";
import styles from "./contact.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) {
      return toast.error("All fields are required!");
    }
    try {
      setLoading(true);
      await axios.post("/api/contact", { name, email, message });
      toast.success("Message sent successfully");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.container} id="contact">
      <div className={"container " + styles.contactContainer}>
        <div className={styles.form}>
          <div className={styles.header}>
            <h2>
              <strong className="gradient">Contact</strong> Me
            </h2>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <input
                type="text"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className={styles.submit}>
              <button type="submit" className="btn-primary">
                {loading ? (
                  <>
                    <span>Please Wait...</span>
                    <FontAwesomeIcon icon={faSpinner} spin />
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>
        <div>
          <div className={styles.image}>
            <Image
              src="/contact.webp"
              alt="contact me"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
