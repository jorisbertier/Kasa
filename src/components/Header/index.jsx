import image from '../../assets/images/ile.png'

function Header() {
    return (
        <header>
            <div className="header__wrapper">
                <img src={image} alt=""/>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </header>
    )
}

export default Header