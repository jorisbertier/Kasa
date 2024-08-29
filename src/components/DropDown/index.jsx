import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function DropDown({title, width, margin = "", height}) {
    return (
        <div className="about__dropDown" style={{ width: width , margin: margin, height: height}}>
            <h4 className="about__dropDown--title">{title}</h4>
            <div className="about__dropDown--up">
            <FontAwesomeIcon className='dropDownUp' icon={faAngleDown} />
            </div>
        </div>
    )
}

export default DropDown