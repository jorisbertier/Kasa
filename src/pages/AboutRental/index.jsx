import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import DropDown from '../../components/DropDown'
import { useParams } from 'react-router-dom'
import data from '../../datas/Data.json';
import { useState } from 'react';

function AboutRental() {

    const {idRent} = useParams()

    const [isOpenDescription, setIsOpenDescription] = useState(false)
    const [isOpenEquipment, setIsOpenEquipment] = useState(false)

    const rent = data.reduce((acc,element) => {
        return element.id === idRent ? element : acc
    });

    let [currentIndex, setCurrentIndex] = useState(0)
    const allPictures = rent.pictures

    function handleNext() {
        if(currentIndex >= allPictures.length - 1) {
            setCurrentIndex(currentIndex = 0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    function handlePrev() {
        if(currentIndex <= 0) {
            setCurrentIndex(currentIndex = allPictures.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }
    const hidden = allPictures.length !== 1;

    return (
        <div className="wrapper">
            <div className="carrusel__wrapper">
                <img src={allPictures[currentIndex]} className="carrusel__wrapper--gallery" alt={`Carusel pictures ${rent.host.name}`}/>
                {hidden ? (
                <>
                    <div className="carrusel__wrapper--arrowl">
                        <FontAwesomeIcon className='arrowLeft' icon={faChevronLeft} onClick={handlePrev}/>
                    </div>
                    <div className="carrusel__wrapper--arrowr">
                        <FontAwesomeIcon className='arrowRight' icon={faChevronRight} onClick={handleNext}/>
                    </div>
                    <div className='carrusel__wrapper--number'>{currentIndex + 1}/{allPictures.length}</div>
                </>
            ) : null
            }
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
                    </div>
                </div>
                <div className="property__bloc2">
                    <div className="property__review">
                        <h3 className="property__review--title">{rent.host.name}</h3>
                        <img src={rent.host.picture} alt={`Profil ${rent.host.name}`} className="property__review--profil"/>
                    </div>
                    <div className="property__review--rating">
                        {[...Array(5)].map((_, index) => (
                            <FontAwesomeIcon className={index < rent.rating ? "star" : "star2"} icon={faStar} key={index}/>
                        ))}
                    </div>

                </div>
            </div>
            <div className='collaspe__wrapper'>
                <div className='collaspe__wrapper--description'>
                    <DropDown title="Description" width="100%" height="52px" isOpen={isOpenDescription} setIsOpen={setIsOpenDescription} />
                    {isOpenDescription && (
                        <div className="property__dropdown--content">{rent.description}</div>
                    )}
                </div>
                <div className='collaspe__wrapper--equipment'>
                    <DropDown title="Equipements" width="100%" height="52px" isOpen={isOpenEquipment} setIsOpen={setIsOpenEquipment}/>
                    {isOpenEquipment && (
                        <div className='property__dropdown--content'>{rent.equipments.map((equipment) => (
                            <div>{equipment}</div>
                        ))}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AboutRental