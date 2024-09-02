import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

function DropDown({title, width, margin = "", height, isOpen, setIsOpen}) {

    function handleOpen() {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }

    return (
        <div className="about__dropDown" style={{ width: width , margin: margin, height: height}}>
            <h4 className="about__dropDown--title">{title}</h4>
            <div className="about__dropDown--up">
                {isOpen
                ?
                <FontAwesomeIcon className='dropDownUp' icon={faAngleUp} onClick={handleOpen}/>
                : <FontAwesomeIcon className='dropDownUp' icon={faAngleDown} onClick={handleOpen}/>
            }
            </div>
        </div>
    )
}

export default DropDown