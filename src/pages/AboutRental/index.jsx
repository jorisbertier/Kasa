import Image from '../../assets/images/Background.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import DropDown from '../../components/DropDown'
import { useParams } from 'react-router-dom'
import data from '../../datas/Data.json';

function AboutRental() {

    const {idRent} = useParams()

    const rent = data.reduce((acc,element) => {
        return element.id === idRent ? element : acc
    });
    console.log(rent)    
    return (
        <div className="wrapper">
            <div className="carrusel__wrapper">
                <img src={Image} className="carrusel__wrapper--gallery"/>
                <div className="carrusel__wrapper--arrowl">
                    <FontAwesomeIcon className='arrowLeft' icon={faChevronLeft}/>
                </div>
                <div className="carrusel__wrapper--arrowr">
                    <FontAwesomeIcon className='arrowRight' icon={faChevronRight} />
                </div>
            </div>

            <div className="property__wrapper">
                <div className="property__bloc1">
                    <div className="property__details">
                        <div className="property__header">
                            <h2 className="property__header--title">{rent.title}</h2>
                            <span className="property__header--subtitle">{rent.location}</span>
                        </div>
                        <div className="property__tags">
                            {rent.tags.map((tag, index) =>(
                                <div className="property__tag--tag" key={`${tag}-${index}`}>{tag}</div>
                            ))}
                        </div>
                        <DropDown title="Description" width="60%" height="52px"/>
                    </div>
                </div>
                <div className="property__bloc2">
                    <div className="property__review">
                        <h3 className="property__review--title">{rent.host.name}</h3>
                        <img src={rent.host.picture} alt={`Profil ${rent.host.name}`} className="property__review--profil"/>
                    </div>
                    <div className="property__review--rating">
                        {[...Array(5)].map((_, index) => (
                            <FontAwesomeIcon className={index < rent.rating ? "star" : "star2"} icon={faStar} />
                        ))}
                    </div>
                    <DropDown title="Equipements" width="100%" height="52px"/>
                </div>
            </div>
        </div>
    )
}

export default AboutRental