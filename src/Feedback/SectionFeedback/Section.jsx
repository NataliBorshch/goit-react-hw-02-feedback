import React from "react";
import styles from "../Feedback.module.css";

const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </>
  );
};

export default Section;
