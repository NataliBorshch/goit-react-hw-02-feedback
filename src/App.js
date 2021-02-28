import React from "react";
import Feedback from "./components/Feedback";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <Feedback />
    </div>
  );
};

export default App;
