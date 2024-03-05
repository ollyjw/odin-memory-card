import { useState, useEffect } from "react"
import CardsContainer from "./CardsContainer"
import Header from "./Header"
import fetchCharactersById from "../helpers/fetchCharacters"
import shuffleArr from "../helpers/shuffleArr"
import GameOverModal from "./GameOverModal"

export default function Game() {
    const [characterData, setCharacterData] = useState([]);  
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clickedChars, setClickedChars] = useState([]);
    const [result, setResult] = useState("in-progress");

    function handleClick(e) {       
        // lose condition - if current click target has the same id as character who has been clicked already
        if (clickedChars.includes(e.currentTarget.id)) {
            // check if score is greater than highscore
            if (currentScore > bestScore) {
                setBestScore(currentScore);
            }
            // clear the clicked characters & set result state to loss
            setClickedChars([]);
            setResult("loss");
        } else { // current click target hasn't been clicked before
            // win condition - if we reach highest score...
            if (currentScore + 1 === characterData.length) {
                setCurrentScore(currentScore + 1);
                setBestScore(currentScore);
                setClickedChars([]);
                setResult("win");               
            } else {
                setCurrentScore(currentScore + 1);                
            }
            // add 1 to current score and push char id to clickedChars
            setCurrentScore(currentScore + 1);
            setClickedChars([...clickedChars, e.currentTarget.id]);
        }
        // on click the cards shuffle in any condition
        // existing data defined as prevChars gets shuffled
        const cardsContainer = document.querySelector(".cards-container");
        cardsContainer.classList.toggle("flipped");
        setTimeout(() => {
            cardsContainer.classList.toggle("flipped")
        }, "1000");
        // Shuffle must happen in shorter time period otherwise confusing css transitions occur
        setTimeout(() => {
            setCharacterData((prevChars) => shuffleArr([...prevChars]));
        }, "500");        
    }

    async function fetchTargetData() {
        const aotCharIdArr = [188, 2, 1, 5, 12, 8, 86, 3, 4, 10, 87, 67, 95, 101, 124, 74, 184, 104, 57, 193, 88, 90, 89, 82, 91, 92, 182, 71, 160]; //29 chars (- i wanted selection of main characters rather than a set including some guy's horse!)
        const newArr = [];

        // Take 12 random items from id array, push them to new array and remove each item from original array with splice to avoid repetitions
        for (let i = 0; i < 12; i++) {
            const randomIndexNo = Math.floor(Math.random() * aotCharIdArr.length);
            newArr.push(aotCharIdArr[randomIndexNo]);
            aotCharIdArr.splice(randomIndexNo,1); // splice(start, deleteCount)
        }

        const newUrl = `https://api.attackontitanapi.com/characters/${newArr.toString()}`;

        const aotTargetChars = await fetchCharactersById(newUrl);
        setCharacterData(shuffleArr(aotTargetChars));
        setResult("in-progress");
    }

    function handlePlayAgain() {
        setResult("in-progress");
        setCurrentScore(0);
        setBestScore(currentScore);
        fetchTargetData();
    }

    useEffect(() => {
        fetchTargetData();
    }, []);

    return (
        <>
            <Header 
                currentScore={currentScore}
                bestScore={bestScore}
            />
            <CardsContainer 
                characterData={characterData}
                onCardClick={handleClick}
            />
            {result === "win" || result === "loss" ? (
                <GameOverModal
                    winOrLoss={result}
                    finalScore={currentScore}
                    onBtnClick={handlePlayAgain}
                />
            ) : ("")}
        </>
    )
}