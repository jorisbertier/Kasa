import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Slideshow({rent}) {
    console.log(rent)
    let [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false)
    const allPictures = rent.pictures;

    function changeImage(newIndex) {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex(newIndex);
            setFade(false);
        }, 500);
    }

    function handleNext() {
        const newIndex = currentIndex >= allPictures.length - 1 ? 0 : currentIndex + 1;
        changeImage(newIndex);
        // setCurrentIndex(newIndex)
    }

    function handlePrev() {
        if(currentIndex <= 0) {
            // setCurrentIndex(currentIndex = allPictures.length - 1)
            changeImage(currentIndex = allPictures.length - 1);
        } else {
            // setCurrentIndex(currentIndex - 1)
            changeImage(currentIndex - 1);
        }
    }
    const hidden = allPictures.length !== 1;

    return (
        <div className="carrusel__wrapper">
            <img src={allPictures[currentIndex]} className={`carrusel__wrapper--gallery ${fade ? 'fade' : ''}`}  alt={`Carusel pictures ${rent.host.name}`}/>
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