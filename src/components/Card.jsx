export default function Card({ cardContent }) {
    const {img, id, name} = cardContent;
    return (
        <div className="card" id={id}>
            <img 
                key={id} 
                src={img} 
                alt={name} 
            />
            <p>{name}</p>
        </div>
    )
}
