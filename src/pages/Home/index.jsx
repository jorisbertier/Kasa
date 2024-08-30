import Banner from "../../components/Banner"
import image from '../../assets/images/ile.png'
import Card from "../../components/Card"
import data from '../../datas/Data.json'
import { Link } from "react-router-dom"

function Home() {

    return (
    <div>
        <Banner image={image} title="Chez vous, partout et ailleurs"/>
        <div className="home">
            {data.map((data) => (
                <div key={`${data.id}`}>
                <Link to={`/aboutRental/${data.id}`}>
                    <Card title ={data.title}
                        image={data.cover}
                        description={data.description}
                        id={data.id}
                        pictures={data.pictures}
                        rating={data.rating}
                        equipments={data.equipments}
                        location={data.location}
                        tag={data.tags}
                    />
                </Link>
                </div>
            ))}
        </div>
    </div>
)
}

export default Home