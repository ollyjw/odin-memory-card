import { useState, useEffect } from "react"
import CardsContainer from "./CardsContainer"
import Header from "./Header"
import { fetchCharactersById } from "../helpers/fetchCharacters"

export default function Game() {
    const [characterData, setCharacterData] = useState([]);  
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clickedChars, setClickedChars] = useState([]);

    function handleClick(e) {
        
        console.log(e.currentTarget.id);
        console.log(clickedChars);
        
        // if current click target has the same id as character who has been clicked already
        if (clickedChars.includes(e.currentTarget.id)) {
            // check if score is greater than highscore
            if (currentScore > bestScore) {
                setBestScore(currentScore);
            }
            // reset score to 0 & clear the clicked characters
            setCurrentScore(0);
            setClickedChars([]);
        } else { // current click target hasn't been clicked before
            // add 1 to current score and push  ____ to clickedChars
            setCurrentScore(currentScore + 1);
            setClickedChars([...clickedChars, e.currentTarget.id]);
        }
    }

    useEffect(() => {
        async function fetchTargetData() {
            const aotCharIdArr = [188, 2, 1, 5, 12, 8, 86, 3, 4, 10, 87, 67, 95, 101, 124, 74, 184, 104, 57, 193, 88, 90, 89, 82, 91, 92, 182, 71, 160];
            const newArr = [];

            // Take 12 random items from id array, push them to new array and remove each item from original array with splice to avoid repetitions
            for (let i = 0; i < 12; i++) {
                const randomIndexNo = Math.floor(Math.random() * aotCharIdArr.length);
                newArr.push(aotCharIdArr[randomIndexNo]);
                aotCharIdArr.splice(randomIndexNo,1); // splice(start, deleteCount)
            }

            //console.log(newArr);

            const newUrl = `https://api.attackontitanapi.com/characters/${newArr.toString()}`;

            const aotTargetChars = await fetchCharactersById(newUrl);
            setCharacterData(aotTargetChars);
        }
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
        </>
    )
}