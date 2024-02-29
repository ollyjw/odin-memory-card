import Card from "./Card"
import "../styles/card.css"

export default function CardsContainer({ characterData, onCardClick }) {
    //console.log(characterData);
    return (
        <div className="cards-container">
            {characterData.map((char) => (
                <div 
                    key={char.id}
                    className="col"
                >
                    <Card 
                        key={char.id}
                        cardContent={char}
                        onClick={onCardClick}
                    />
                </div>
            ))}
        </div>
    )
}