function Banner({image, title = ''}) {
    return (
        <header>
            <div className="header__wrapper">
                <img src={image} alt=""/>
                <h1>{title}</h1>
            </div>
        </header>
    )
}

export default Banner