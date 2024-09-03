import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Slideshow({rent}) {
    console.log(rent)
    let [currentIndex, setCurrentIndex] = useState(0)
    const allPictures = rent.pictures

    function handleNext() {
        if(currentIndex >= allPictures.length - 1) {
            setCurrentIndex(currentIndex = 0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    function handlePrev() {
        if(currentIndex <= 0) {
            setCurrentIndex(currentIndex = allPictures.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }
    const hidden = allPictures.length !== 1;

    return (
        <div className="carrusel__wrapper">
            <img src={allPictures[currentIndex]} className="carrusel__wrapper--gallery" alt={`Carusel pictures ${rent.host.name}`}/>
            {hidden ? (
            <>
                <div className="carrusel__wrapper--arrowl">
                    <FontAwesomeIcon className='arrowLeft' icon={faChevronLeft} onClick={handlePrev}/>
                </div>
                <div className="carrusel__wrapper--arrowr">
                    <FontAwesomeIcon className='arrowRight' icon={faChevronRight} onClick={handleNext}/>
                </div>
                <div className='carrusel__wrapper--number'>{currentIndex + 1}/{allPictures.length}</div>
            </>
        ) : null
        }
        </div>

    )
}

export default Slideshow