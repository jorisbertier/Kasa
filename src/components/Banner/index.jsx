function Banner({image, title = '', style}) {
    return (
        <header>
            <div className="header__wrapper">
                <img src={image} alt="" style={style}/>
                <h1>{title}</h1>
            </div>
        </header>
    )
}

export default Banner