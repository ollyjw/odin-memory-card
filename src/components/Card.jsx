export default function Card({ cardContent, onClick }) {
    // Full url returned 404 error so i remove everything after '.png' in the url and it works
    const getPathFromUrl = (url) => {
        return url.split("revision")[0];
    }

    const imgUrl = cardContent.img;
    const newUrl = getPathFromUrl(String(imgUrl));

    return (
        <div className="card" id={cardContent.id} onClick={onClick}>
            <div className="card-front">
                <img 
                    key={cardContent.id} 
                    src={newUrl} 
                    alt={cardContent.name} 
                    className="card-img"
                />
                <div className="card-text">
                    <p>{cardContent.name}</p>  
                </div>
            </div>
            <div className="card-back"></div>
        </div>
    )
}
