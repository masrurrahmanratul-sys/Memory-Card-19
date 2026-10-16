import "../CSS/Scoreboard.css";


function Scoreboard({ score, highScore }) {
    return (
         <div className="scoreboard">
      <div className="score-box">
        <p className="score-label">Current Score</p>
        <p className="score-number">{score}</p>
      </div>
       <div className="score-box">
        <p className="score-label">Best Score</p>
        <p className="score-number">{highScore}</p>
      </div>
        </div>
    );
    }

export default Scoreboard;