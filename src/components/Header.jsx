import "../styles/header.css"
import Scoreboard from "./Scoreboard"

export default function Header({currentScore, bestScore}) {
    return (
        <>
            <div className="header">
                <div className="header-left">
                    <h2 className="heading">Attack on Titan Memory Game</h2>
                    <p className="instructions">Get points by clicking on the card but don&apos;t click on any more than once</p>
                </div>
                <Scoreboard 
                    currentScore={currentScore}
                    bestScore={bestScore}
                />
            </div>
        </>
    )
}