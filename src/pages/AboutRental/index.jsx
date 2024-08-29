import Image from '../../assets/images/Background.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import DropDown from '../../components/DropDown'

function AboutRental() {
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
                            <h2 className="property__header--title">Cozy loft on the canal Saint-Martin</h2>
                            <span className="property__header--subtitle">Paris ile de France</span>
                        </div>
                        <div className="property__tags">
                            <div className="property__tag--tag">cozy</div>
                            <div className="property__tag--tag">cozy</div>
                            <div className="property__tag--tag">cozy</div>
                        </div>
                        <DropDown title="Description" width="60%" height="52px"/>
                    </div>
                </div>
                <div className="property__bloc2">
                    <div className="property__review">
                        <h3 className="property__review--title">Alexandre <br></br>Dumas</h3>
                        <img src={Image} className="property__review--profil"/>
                    </div>
                    <div className="property__review--rating">
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star" icon={faStar} />
                        <FontAwesomeIcon className="star2" icon={faStar} />
                        <FontAwesomeIcon className="star2" icon={faStar} />
                    </div>
                    <DropDown title="Equipements" width="100%" height="52px"/>
                </div>
            </div>
        </div>
    )
}

export default AboutRental