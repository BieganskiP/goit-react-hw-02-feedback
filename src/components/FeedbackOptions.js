const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <button onClick={() => onLeaveFeedback("good")}>Good</button>
    <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
    <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
  </div>
);

export default FeedbackOptions;
