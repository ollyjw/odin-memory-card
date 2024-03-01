import "../styles/modal.css"
import win from "../assets/win.webp"
import loss from"../assets/loss.jpg"

export default function GameOverModal({winOrLoss, finalScore, onBtnClick}) {
    return (
        <div className="modal-bg">
            <div className="game-over-modal">
                {winOrLoss === "win" ? (<h2 className="modal-heading">You won!</h2>) : (<h2 className="modal-heading">You lost.</h2>)}
                <img src={winOrLoss === "win" ? win : loss} alt="Result image" className="modal-img" />
                <p>Your final score is {finalScore}</p>
                <button onClick={onBtnClick}>Play again</button>
            </div>
        </div>
    )
}