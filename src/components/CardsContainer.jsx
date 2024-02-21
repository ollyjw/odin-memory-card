import Card from "./Card";

export default function CardsContainer({ characterData }) {
    
    const cards = characterData;

    console.log(characterData);

    return (
        <div className="cards-container">
            {cards.map((card) => (
                <Card 
                    key={card.id}
                    cardContent={card}
                />
            ))}
        </div>
    )
}