import ErrorImage from '../../assets/images/404.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

function Error() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768)

    useEffect(()=> {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return(
        <div className='error__wrapper'>
            <img src={ErrorImage} alt="Logo error 404"/>
            <h2 className='error__wrapper--title'>Oups! La page que {isSmallScreen ? <><br/>vous</> : 'vous'} demandez n'existe pas.</h2>
            <Link to="/">
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}

export default Error