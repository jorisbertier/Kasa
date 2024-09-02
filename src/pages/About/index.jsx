import image from '../../assets/images/montain.png'
import Banner from '../../components/Banner'
import DropDown from '../../components/DropDown'
import { useState } from 'react'

function About() {

    const [isOpenDescription, setIsOpenDescription] = useState(false)
    const [isOpenRespect, setIsOpenRespect] = useState(false)
    const [isOpenService, setIsOpenService] = useState(false)
    const [isOpenSecure, setIsOpenSecure] = useState(false)
    
    return(
        <div>
            <Banner image={image} />
            <div className='about__wrapper'>
                <div>
                    {/* <DropDown title="Description" width="75%" margin="0 auto" heigth="52px" isOpen={isOpenDescription} setIsOpen={setIsOpenDescription}/>
                    {isOpenDescription && (<p className='about__wrapper--text'>Les annonces postées sur Kasagarantissent une fiabilité totale.Les photos sont conformes au logements, et toutes
                        les informations régulièrement vérifiées par nos équipes.
                    </p>)} */}
                    <DropDown title="Description" width="75%" margin="0 auto" height="52px" isOpen={isOpenDescription} setIsOpen={setIsOpenDescription}/>
                    <p className={`about__wrapper--text ${isOpenDescription ? 'open' : ''}`}>
                        Les annonces postées sur Kasagarantissent une fiabilité totale.Les photos sont conformes au logements, et toutes
                        les informations régulièrement vérifiées par nos équipes.
                    </p>
                </div>
                <div>
                    <DropDown title="Respect" width="75%" margin="0 auto" heigth="52px" isOpen={isOpenRespect} setIsOpen={setIsOpenRespect}/>
                    <p className={`about__wrapper--text ${isOpenRespect ? 'open' : ''}`}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation
                        du voisinage entraînera une exclusion de notre plateforme.
                    </p>
                </div>
                <div>
                    <DropDown title="Service" width="75%" margin="0 auto" heigth="52px" isOpen={isOpenService} setIsOpen={setIsOpenService}/>
                    {isOpenService && ( <p className='about__wrapper--text'>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que
                        se soit avec nos hôtes ou nos locataires , soit empreinte de respect et de bienveillance.
                    </p>)}
                </div>
                <div>
                    <DropDown title="Sécurité" width="75%" margin="0 auto" heigth="52px" isOpen={isOpenSecure} setIsOpen={setIsOpenSecure}/>
                    {isOpenSecure && ( <p className='about__wrapper--text'>La  sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour nos voyageurs, chaque logement, correspond aux critères
                        de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standarts sont bien réspectés
                        .Nous organisonségalment des ateliers sur la sécurité domestique pour nos hôtes.
                    </p>)}
                </div>
            </div>
        </div>
    )
}

export default About