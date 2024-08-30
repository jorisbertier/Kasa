import Banner from "../../components/Banner"
import image from '../../assets/images/ile.png'
import Card from "../../components/Card"

function Home() {
    return (
    <div>
        <Banner image={image} title="Chez vous, partout et ailleurs"/>
        <div className="home">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
)
}

export default Home