import React from "react";
import PropTypes from "prop-types";

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
              className={styles[ele]}
            ></button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
