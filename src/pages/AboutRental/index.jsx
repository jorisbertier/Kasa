import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import DropDown from '../../components/DropDown'
import { useParams, useNavigate } from 'react-router-dom'
import data from '../../datas/Data.json';
import { useState, useEffect } from 'react';
import Slideshow from '../../components/Slideshow';

function AboutRental() {

    const {idRent} = useParams()

    const [isOpenDescription, setIsOpenDescription] = useState(false)
    const [isOpenEquipment, setIsOpenEquipment] = useState(false)

    const rent = data.reduce((acc,element) => {
        return element.id === idRent ? element : acc
    });

    const navigate = useNavigate();

    useEffect(() => {
        if(idRent !== rent.id) {
            console.log('error')
            navigate('/error');
        }
    })

    return (
        <div className="wrapper">
            <Slideshow rent={rent}/>

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
                    
                        <div className={`property__dropdown--content ${isOpenDescription ? 'open' : ''}`}>{rent.description}</div>
                    
                </div>
                <div className='collaspe__wrapper--equipment'>
                    <DropDown title="Équipements" width="100%" height="52px" isOpen={isOpenEquipment} setIsOpen={setIsOpenEquipment}/>

                        <div className={`property__dropdown--content ${isOpenEquipment ? 'open' : ''}`}>{rent.equipments.map((equipment, index) => (
                            <div key={`${equipment}-${index}`}>{equipment}</div>
                        ))}</div>
                </div>
            </div>
        </div>
    )
}

export default AboutRental