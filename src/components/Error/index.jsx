import ErrorImage from '../../assets/images/404.png'
import { Link } from 'react-router-dom'

function Error() {
    return(
        <div className='error__wrapper'>
            <img src={ErrorImage} alt="Error 404 image"/>
            <h2 className='error__wrapper--title'>Oups la page que vous demandez n'existe pas</h2>
            <Link to="/">
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}

export default Error