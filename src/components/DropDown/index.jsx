import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

function DropDown({title, width, margin = "", height, isOpen, setIsOpen}) {

    function handleOpen() {
        setIsOpen(!isOpen)
    }
    
    return (
        <div className="about__dropDown" style={{ width: width , margin: margin, height: height}}>
            <h4 className="about__dropDown--title">{title}</h4>
            <div className="about__dropDown--up">
                <FontAwesomeIcon className={`dropDownUp ${isOpen ? 'openDropdown' : 'closeDropdown'}`} icon={faAngleUp} onClick={handleOpen}/>
            </div>
        </div>
    )
}

export default DropDown