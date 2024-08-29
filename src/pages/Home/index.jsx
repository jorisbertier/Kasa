import Header from "../../components/Header"

function Home() {
    return (
    <div>
        <Header/>
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