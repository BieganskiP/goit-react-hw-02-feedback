import css from "../app.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.buttons}>
    <button onClick={() => onLeaveFeedback("good")} className={css.button}>
      Good
    </button>
    <button onClick={() => onLeaveFeedback("neutral")} className={css.button}>
      Neutral
    </button>
    <button onClick={() => onLeaveFeedback("bad")} className={css.button}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
