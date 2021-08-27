import { useState } from 'react';
import Statistics from './components/FeedbackWidget/Statistics';
import Section from './components/FeedbackWidget/Section';
import FeedbackOptions from './components/FeedbackWidget/FeedbackOption';
import Notification from './components/FeedbackWidget/Notification';
import Styles from './App.module.css';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedbacks = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    const percent = (good * 100) / totalFeedbacks();
    return Math.round(percent);
  };

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  return (
    <div className={Styles.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={option => onLeaveFeedback(option)}
        />
        <h2>Statistics</h2>
        {totalFeedbacks() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks()}
            positivePercentage={positivePercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}

export default App;