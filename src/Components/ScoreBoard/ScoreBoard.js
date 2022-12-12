import CurrentScore from "./CurrentScore";
import HighScore from "./HighScore";

const ScoreBoard = () => {
  return (
    <div className="score-board">
      <CurrentScore />
      <HighScore />
    </div>
  );
};

export default ScoreBoard;
