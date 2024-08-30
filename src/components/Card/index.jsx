function Card({title, image}) {

    return (
        <div className="home__gallery">
            <img src={image} alt ={title} className="home__gallery--image"/>
            <div className="home__gallery--title">{title}</div>
        </div>
    )
}

export default Card