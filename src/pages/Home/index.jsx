import Banner from "../../components/Banner"
import image from '../../assets/images/ile.png'
import Card from "../../components/Card"
import data from '../../datas/Data.json'

function Home() {

    console.log(data)
    return (
    <div>
        <Banner image={image} title="Chez vous, partout et ailleurs"/>
        <div className="home">
            {data.map((data) => (
                <div key={`${data.id}`}>
                    <Card title ={data.title}
                        src={data.cover}
                        description={data.description}
                        id={data.id}
                        pictures={data.pictures}
                        rating={data.rating}
                        equipments={data.equipments}
                        location={data.location}
                        tag={data.tags}
                    />
                </div>
            ))}
        </div>
    </div>
)
}

export default Home