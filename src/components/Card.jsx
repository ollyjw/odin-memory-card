export default function Card({ cardContent }) {
    return (
        <div className="card" id={cardContent.id}>
            <img 
                key={cardContent.id} 
                src={cardContent.img} 
                alt={cardContent.name} 
            />
            <p>{cardContent.name}</p>
        </div>
    )
}
