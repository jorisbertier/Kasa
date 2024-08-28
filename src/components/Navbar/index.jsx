import Logo from '../../assets/images/LOGO.png'

function Navbar() {
    return (
        <nav>
            <div className="nav__wrapper">
                <a>
                    <img src={Logo} alt="logo du site Kasa"/>
                </a>
            </div>
            <div className='nav__wrapper'>
                <ul>
                    <a href="#">
                        <li>Accueil</li>
                    </a>
                    <a href="#">
                        <li>A propos</li>
                    </a>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar