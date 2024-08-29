import Banner from "../../components/Banner"
import image from '../../assets/images/ile.png'

function Home() {
    return (
    <div>
        <Banner image={image} title="Chez vous, partout et ailleurs"/>
        <div className="home">
            <div className="home__gallery">
                <img className="home__gallery--image"/>
                <div className="home__gallery--title">Titre de la location</div>
            </div>
            <div className="home__gallery">
                <img className="home__gallery--image"/>
                <div className="home__gallery--title"></div>
            </div>
            <div className="home__gallery">
                <img className="home__gallery--image"/>
                <div className="home__gallery--title"></div>
            </div>
            <div className="home__gallery">
                <img className="home__gallery--image"/>
                <div className="home__gallery--title"></div>
            </div>
        </div>
    </div>
)
}

export default Home