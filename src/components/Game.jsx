import { useState, useEffect } from "react";
import CardsContainer from "./CardsContainer";
import { fetchCharacters } from "../helpers/fetchCharacters";

export default function Game() {
    const [characterData, setCharacterData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const aotCharacterObjs = await fetchCharacters();
            setCharacterData(aotCharacterObjs.results);
        }

        fetchData();
    
    }, []);

    return (
        <CardsContainer 
            characterData={characterData}
        />
    )
}