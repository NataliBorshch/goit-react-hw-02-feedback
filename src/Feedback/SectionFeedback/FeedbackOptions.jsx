import React from "react";
import styles from "../Feedback.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  return (
    <ul className={styles.listBtn}>
      {keys.map((ele) => {
        return (
          <li key={ele}>
            <button
              id={ele}
              onClick={onLeaveFeedback}
              className={styles[`${ele}`]}
            >
              {/* {ele.toLocaleUpperCase()} */}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackOptions;
