import PropTypes from "prop-types";
import styles from "./Options.module.css";

const Options = ({ options, onLeaveFeedback, totalFeedback, onReset }) => (
  <div className={styles.container}>
    {options.map((option) => (
      <button
        key={option}
        onClick={() => onLeaveFeedback(option)}
        className={styles.button}
      >
        {option}
      </button>
    ))}
    {totalFeedback > 0 && (
      <button onClick={onReset} className={styles.resetButton}>
        Reset
      </button>
    )}
  </div>
);

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default Options;
