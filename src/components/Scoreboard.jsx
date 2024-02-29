import "../styles/scoreboard.css"

export default function Scoreboard({currentScore, bestScore}) {
    return (
        <>
            <div className="score-board">
                <p className="scores"><span className="score-title">Score:</span> {currentScore}</p>
                <p className="scores"><span className="score-title">Best score:</span> {bestScore}</p>
            </div>
        </>
    )
}