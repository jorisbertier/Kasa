import Logo from '../../assets/images/LOGO.png'

function Navbar() {
    return (
        <nav>
            <div>
                <img src={Logo} alt="logo du site Kasa"/>
            </div>
            <div>
                <ul>
                    <li>Accueil</li>
                    <li>A propos</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar