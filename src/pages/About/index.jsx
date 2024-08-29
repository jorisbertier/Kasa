import image from '../../assets/images/montain.png'
import Banner from '../../components/Banner'
import DropDown from '../../components/DropDown'

function About() {
    return(
        <div>
            <Banner image={image} />
            <div className='about__wrapper'>
                <DropDown title="Description" width="75%"/>
                <DropDown title="Respect" width="75%"/>
                <DropDown title="Service" width="75%"/>
                <DropDown title="Sécurité" width="75%"/>
            </div>
        </div>
    )
}

export default About