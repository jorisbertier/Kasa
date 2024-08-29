import Image from '../../assets/images/Background.png'

function AboutRental() {
    return (
        <div className="wrapper">
            <div className="carrusel__wrapper">
                <img src={Image} className="carrusel__wrapper--gallery"/>
                <div className="carrusel__wrapper--arrowl">tttt</div>
                <div className="carrusel__wrapper--arrowr">ttt</div>
            </div>

            <div className="property__wrapper">
                <div className="property__bloc1">
                    <div className="property__details">
                        <div className="property__header">
                            <h2 className="property__header--title">Cozy loft on the canal Saint-Martin</h2>
                            <span className="property__header--subtitle">Paris ile de France</span>
                        </div>
                        <div className="property__tags">
                            <div className="property__tag--tag">cozy</div>
                            <div className="property__tag--tag">cozy</div>
                            <div className="property__tag--tag">cozy</div>
                        </div>
                        <div className="property__dropdown">
                            <h4 className="property__dropdown--title">Description</h4>
                            <div className="property__dropdown--down">text</div>
                        </div>
                    </div>
                </div>
                <div className="property__bloc2"></div>
            </div>
        </div>
    )
}

export default AboutRental