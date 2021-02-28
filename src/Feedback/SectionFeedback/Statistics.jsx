import React from "react";
import Notification from "./Notification";
import styles from "../Feedback.module.css";

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <div>
      <h2 className={styles.staticTitle}>Statistics</h2>
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <div>
          <div className={styles.boxText}>
            <p className={styles.text}>Good:{good}</p>
            <p className={styles.text}>Neutral:{neutral}</p>
            <p className={styles.text}>Bad:{bad}</p>
          </div>

          <p className={styles.total}>Total:{total}</p>
          <p className={styles.total}>Positive Feedback:{positiveFeedback}%</p>
        </div>
      )}
    </div>
  );
};

export default Statistics;
