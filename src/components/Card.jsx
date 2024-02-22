export default function Card({ cardContent }) {
    
    const getPathFromUrl = (url) => {
        return url.split("revision")[0];
    }

    const imgUrl = cardContent.img;
    const newUrl = getPathFromUrl(String(imgUrl));


    return (
        <div className="card" id={cardContent.id}>
            <img 
                key={cardContent.id} 
                src={newUrl} 
                alt={cardContent.name} 
            />
            <p>{cardContent.name}</p>            
        </div>
    )
}
