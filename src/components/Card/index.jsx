function Card({title, image}) {

    return (
        <div className="home__gallery">
            <div className="home__gallery--image-container">
                <img src={image} alt={title} className="home__gallery--image" />
            </div>
            <div className="home__gallery--title">{title}</div>
        </div>
    )
}

export default Card