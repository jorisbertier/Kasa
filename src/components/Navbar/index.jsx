import { Link } from 'react-router-dom'
import Logo from '../../assets/images/LOGO.png'
import { useLocation } from 'react-router-dom'

function Navbar() {

    const location = useLocation()
    
    return (
        <nav>
            <div className="nav__wrapper">
                <Link to='/'> : 
                    <img src={Logo} alt="logo du site Kasa"/>
                </Link>
            </div>
            <div className='nav__wrapper'>
                <ul>
                    <Link to="/" className={location.pathname === "/" ? 'active' : ''}>
                        <li>Accueil</li>
                    </Link>
                    <Link to="/about" className={location.pathname === "/about" ? 'active' : ''}>
                        <li>A propos</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar