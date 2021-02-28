import React, { Component } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import styles from "./Feedback.module.css";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  giveFeedback = (event) => {
    const value = event.target.id;
    this.setState((prevState) => {
      return {
        [value]: prevState[value] + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state);
    const sum = total.reduce((acc, elem) => acc + elem, 0);
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    const total = Object.values(this.state).reduce(
      (acc, elem) => acc + elem,
      0
    );
    const positive = this.state.neutral + this.state.good;
    const prozent = (positive / total) * 100;
    return Number.parseInt(prozent);
  };
  render() {
    return (
      <div className={styles.section}>
        <Section title="Please Live Feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.giveFeedback}
          />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positiveFeedback={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default Feedback;
