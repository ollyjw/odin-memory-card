import { useState, useEffect } from "react";
import CardsContainer from "./CardsContainer";
import { fetchCharactersById } from "../helpers/fetchCharacters";

export default function Game() {
    const [characterData, setCharacterData] = useState([]);      

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

            console.log(newArr);

            const newUrl = `https://api.attackontitanapi.com/characters/${newArr.toString()}`;

            const aotTargetChars = await fetchCharactersById(newUrl);
            setCharacterData(aotTargetChars);
        }

        fetchTargetData();

    }, []);

    return (
        <CardsContainer 
            characterData={characterData}
        />
    )
}