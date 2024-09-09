import image from '../../assets/images/montain.png'
import Banner from '../../components/Banner'
import DropDown from '../../components/DropDown'
import { useState, useEffect } from 'react'

function About() {

    const [isOpenDescription, setIsOpenDescription] = useState(false)
    const [isOpenRespect, setIsOpenRespect] = useState(false)
    const [isOpenService, setIsOpenService] = useState(false)
    const [isOpenSecure, setIsOpenSecure] = useState(false)
    const [resize, setResize] = useState(window.innerWidth)

    useEffect(() => {

            const handleSize= () => {
                setResize(window.innerWidth)
            }
            window.addEventListener('resize', handleSize)
            
            return () => {
                window.removeEventListener('resize', handleSize)
            }
        }, [])

    const dropDownSize = resize <= 768 ? '100%' : '75%';

    return(
        <div>
            <Banner image={image} style={{filter: 'brightness(75%) contrast(100%)'}}/>
            <div className='about__wrapper'>
                <div>
                    <DropDown title="Description" width={dropDownSize} margin="0 auto" height="52px" isOpen={isOpenDescription} setIsOpen={setIsOpenDescription}/>
                    <p className={`about__wrapper--text ${isOpenDescription ? 'open' : ''}`}>
                        Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes au logements, et toutes
                        les informations régulièrement vérifiées par nos équipes.
                    </p>
                </div>
                <div>
                    <DropDown title="Respect" width={dropDownSize} margin="0 auto" heigth="52px" isOpen={isOpenRespect} setIsOpen={setIsOpenRespect}/>
                    <p className={`about__wrapper--text ${isOpenRespect ? 'open' : ''}`}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation
                        du voisinage entraînera une exclusion de notre plateforme.
                    </p>
                </div>
                <div>
                    <DropDown title="Service" width={dropDownSize} margin="0 auto" heigth="52px" isOpen={isOpenService} setIsOpen={setIsOpenService}/>
                    <p className={`about__wrapper--text ${isOpenService ? 'open' : ''}`}>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que
                        se soit avec nos hôtes ou nos locataires , soit empreinte de respect et de bienveillance.
                    </p>
                </div>
                <div>
                    <DropDown title="Sécurité" width={dropDownSize} margin="0 auto" heigth="52px" isOpen={isOpenSecure} setIsOpen={setIsOpenSecure}/>
                    <p className={`about__wrapper--text ${isOpenSecure ? 'open' : ''}`}>La  sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour nos voyageurs, chaque logement, correspond aux critères
                        de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standarts sont bien réspectés
                        .Nous organisonségalment des ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About