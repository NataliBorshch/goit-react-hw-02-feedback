import React from "react";
import styles from "../Feedback.module.css";

const Notification = ({ message }) => {
  return <h2 className={styles.notFeedback}>{message}</h2>;
};

export default Notification;
