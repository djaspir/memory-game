import CurrentScore from "./CurrentScore";
import HighScore from "./HighScore";

const ScoreBoard = ({ currentScore, highScore }) => {
  return (
    <div className="score-board">
      <CurrentScore currentScore={currentScore} />
      <HighScore highScore={highScore} />
    </div>
  );
};

export default ScoreBoard;
